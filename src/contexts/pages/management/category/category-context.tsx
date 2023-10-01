import { ChangeEvent, createContext, useEffect, useState } from 'react';
import CategoryContextType from './category-context-type';
import BillPayCategory from '../../../../models/bill-pay-category';
import { useParams } from 'react-router-dom';
import BillPayCategoryService from '../../../../services/bill-pay-category-service';

export const CategoryContext = createContext<CategoryContextType>({
  description: '',
  handleDescriptionChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  clearFields: () => {
    /** */
  },
  persistData: async () => {
    /** */
  },
});

const CategoryProvider = (props: any) => {
  const [category, setCategory] = useState(new BillPayCategory());

  const [description, setDescription] = useState('');

  const [errorDescription, setErrorDescription] = useState<string | undefined>(undefined);

  const routeParams = useParams();
  const method = routeParams.method as string;
  let id = 0;
  if (routeParams.id) id = Number.parseInt(routeParams.id);

  const getData = async () => {
    const service = new BillPayCategoryService();
    const data = await service.getOne(id);

    if (data) {
      setCategory(data);
      setDescription(data.description);
    }
  };

  useEffect(() => {
    if (method == 'editar' && id) getData();
  }, []);

  const validate = {
    description: (value: string) => {
      if (value.length <= 0) {
        return {
          message: 'A descrição da categoria precisa ser preenchida.',
          isValid: false,
        };
      } else {
        category.description = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
    setErrorDescription(validate.description(e.target.value).message);
  };

  const validateFields = () => {
    setErrorDescription(validate.description(description).message);

    return validate.description(description).isValid;
  };

  const clearFields = () => {
    setDescription('');
  };
  const persistData = async () => {
    if (validateFields()) {
      const service = new BillPayCategoryService();
      if (method == 'novo') await service.save(category);
      else await service.update(category);
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        description,
        errorDescription,
        handleDescriptionChange,
        clearFields,
        persistData,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
