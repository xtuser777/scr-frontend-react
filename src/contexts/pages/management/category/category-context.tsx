import { ChangeEvent, createContext, useState } from 'react';
import CategoryContextType from './category-context-type';
import { BillPayCategory } from '../../../../models/BillPayCategory';

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
    validateFields();
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
