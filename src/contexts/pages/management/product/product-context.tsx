import { ChangeEvent, createContext, useEffect, useState } from 'react';
import ProductContextType from './product-context-type';
import Representation from '../../../../models/representation';
import TruckType from '../../../../models/truck-type';
import Product from '../../../../models/product';
import ProductService from '../../../../services/product-service';
import { useParams } from 'react-router-dom';
import RepresentationService from '../../../../services/representation-service';
import TruckTypeService from '../../../../services/truck-type-service';

export const ProductContext = createContext<ProductContextType>({
  representations: [],
  types: [],
  typesLinked: [],
  description: '',
  measure: '',
  weight: '',
  price: '',
  priceOut: '',
  representation: '0',
  type: '0',
  handleDescriptionChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleRepresentationChange: (e: ChangeEvent<HTMLSelectElement>) => {
    /** */
  },
  handleMeasureChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleWeightChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handlePriceChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handlePriceOutChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleTypeChange: (e: ChangeEvent<HTMLSelectElement>) => {
    /** */
  },
  addType: () => {
    /** */
  },
  delType: (id: number) => {
    /** */
  },
  clearFields: () => {
    /** */
  },
  persistData: async () => {
    /** */
  },
});

const ProductProvider = (props: any) => {
  const [product, setProduct] = useState(new Product());

  const [representations, setRepresentations] = useState<Representation[]>([]);
  const [types, setTypes] = useState<TruckType[]>([]);
  const [typesLinked, setTypesLinked] = useState<TruckType[]>([]);

  const [description, setDescription] = useState<string>('');
  const [measure, setMeasure] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [priceOut, setPriceOut] = useState<string>('');
  const [representation, setRepresentation] = useState<string>('0');
  const [type, setType] = useState<string>('0');

  const [errorTypesLinked, setErrorTypesLinked] = useState<string | undefined>(undefined);
  const [errorDescription, setErrorDescription] = useState<string | undefined>(undefined);
  const [errorRepresentation, setErrorRepresentation] = useState<string | undefined>(undefined);
  const [errorMeasure, setErrorMeasure] = useState<string | undefined>(undefined);
  const [errorWeight, setErrorWeight] = useState<string | undefined>(undefined);
  const [errorPrice, setErrorPrice] = useState<string | undefined>(undefined);
  const [errorPriceOut, setErrorPriceOut] = useState<string | undefined>(undefined);
  const [errorType, setErrorType] = useState<string | undefined>(undefined);

  const routeParams = useParams();
  const method = routeParams.method as string;
  let id = 0;
  if (routeParams.id) id = Number.parseInt(routeParams.id);

  const getRepresentations = async () => {
    const service = new RepresentationService();
    const representations = await service.get();
    setRepresentations(representations);
  };

  const getTypes = async () => {
    const service = new TruckTypeService();
    const types = await service.get();
    setTypes(types);
  };

  const getData = async () => {
    const service = new ProductService();
    const data = await service.getOne(id);

    if (data) {
      setProduct(data);
      setDescription(data.description);
      setMeasure(data.measure);
      setWeight(data.weight.toString());
      setPrice(data.price.toString());
      setPriceOut(data.priceOut.toString());
      setRepresentation((data.representation as Representation).id.toString());
      setTypesLinked(data.types);
    }
  };

  useEffect(() => {
    getRepresentations();
    getTypes();
    if (method == 'editar' && id) getData();
  }, []);

  const validate = {
    description: (value: string) => {
      if (value.length == 0) {
        setErrorDescription('A descrição do produto precisa ser preenchida.');
        return false;
      } else if (value.length < 2) {
        setErrorDescription('A descrição preenchida tem tamanho inválido.');
        return false;
      } else {
        setErrorDescription(undefined);
        product.description = value;
        return true;
      }
    },
    representation: (value: string) => {
      if (value == '0') {
        setErrorRepresentation('A representação do produto precisa ser preenchida.');
        return false;
      } else {
        setErrorRepresentation(undefined);
        product.representation = representations.find((item) => item.id == Number(value));
        return true;
      }
    },
    measure: (value: string) => {
      if (value.length == 0) {
        setErrorMeasure('A unidade de medida precisa ser preenchida.');
        return false;
      } else if (value.length < 2) {
        setErrorMeasure('A unidade de medida preenchida tem tamanho inválido.');
        return false;
      } else {
        setErrorMeasure(undefined);
        product.measure = value;
        return true;
      }
    },
    weight: (value: string) => {
      if (value.length == 0) {
        setErrorWeight('O peso do produto precisa ser preenchido.');
        return false;
      } else if (Number(value) <= 0) {
        setErrorWeight('O peso do produto informado é inválido.');
        return false;
      } else {
        setErrorWeight(undefined);
        product.weight = Number.parseFloat(
          value.replace(',', '#').replaceAll('.', ',').replace('#', '.'),
        );
        return true;
      }
    },
    price: (value: string) => {
      if (value.length == 0) {
        setErrorPrice('O preço do produto precisa ser preenchido.');
        return false;
      } else if (Number(value) <= 0) {
        setErrorPrice('O preço do produto informado é inválido.');
        return false;
      } else {
        setErrorPrice(undefined);
        product.price = Number.parseFloat(
          value.replace(',', '#').replaceAll('.', ',').replace('#', '.'),
        );
        return true;
      }
    },
    priceOut: (value: string) => {
      if (value.length == 0) {
        setErrorPriceOut('O preço fora do estado do produto precisa ser preenchido.');
        return false;
      } else if (Number(value) <= 0) {
        setErrorPriceOut('O preço fora do estado informado é inválido.');
        return false;
      } else {
        setErrorPriceOut(undefined);
        product.priceOut = Number.parseFloat(
          value.replace(',', '#').replaceAll('.', ',').replace('#', '.'),
        );
        return true;
      }
    },
    types: () => {
      if (typesLinked.length == 0) {
        setErrorTypesLinked('Os tipos do caminhão compatíveis precisam ser adicionados.');
        return false;
      } else {
        setErrorTypesLinked(undefined);
        product.types = typesLinked;
        return true;
      }
    },
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
    validate.description(e.target.value);
  };
  const handleRepresentationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRepresentation(e.target.value);
    validate.representation(e.target.value);
  };
  const handleMeasureChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMeasure(e.target.value);
    validate.measure(e.target.value);
  };
  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
    validate.weight(e.target.value);
  };
  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
    validate.price(e.target.value);
  };
  const handlePriceOutChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPriceOut(e.target.value);
    validate.priceOut(e.target.value);
  };
  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
    if (e.target.value == '0') setErrorType('O tipo de caminhão precisa ser selecinado.');
    else setErrorType(undefined);
  };

  const validateFields = () => {
    return (
      validate.description(description) &&
      validate.representation(representation) &&
      validate.measure(measure) &&
      validate.weight(weight) &&
      validate.price(price) &&
      validate.priceOut(priceOut) &&
      validate.types()
    );
  };

  const addType = () => {
    if (type == '0') setErrorType('O tipo de caminhão precisa ser selecinado.');
    else {
      setErrorType(undefined);
      let exists = undefined;
      if (typesLinked.length > 0) exists = typesLinked.find((item) => item.id == Number(type));
      if (!exists) {
        const newTypes = [...typesLinked];
        newTypes.push(types.find((item) => item.id == Number(type)) as TruckType);
        setTypesLinked(newTypes);
      }
    }
  };
  const delType = (id: number) => {
    let newTypes = [...typesLinked];
    newTypes = newTypes.filter((type) => type.id != id);
    setTypesLinked(newTypes);
  };

  const clearFields = () => {
    setDescription('');
    setMeasure('');
    setWeight('');
    setPrice('');
    setPriceOut('');
    setRepresentation('0');
    setType('0');
    setTypesLinked([]);
  };
  const persistData = async () => {
    if (validateFields()) {
      const service = new ProductService();
      if (method == 'novo') {
        if (await service.save(product)) clearFields();
      } else await service.update(product);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        representations,
        types,
        typesLinked,
        description,
        measure,
        weight,
        price,
        priceOut,
        representation,
        type,
        errorTypesLinked,
        errorDescription,
        errorRepresentation,
        errorMeasure,
        errorWeight,
        errorPrice,
        errorPriceOut,
        errorType,
        handleDescriptionChange,
        handleRepresentationChange,
        handleMeasureChange,
        handleWeightChange,
        handlePriceChange,
        handlePriceOutChange,
        handleTypeChange,
        addType,
        delType,
        clearFields,
        persistData,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
