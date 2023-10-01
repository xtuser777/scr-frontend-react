import { ChangeEvent, createContext, useEffect, useState } from 'react';
import TruckContextType from './truck-context-type';
import TruckType from '../../../../models/truck-type';
import Proprietary from '../../../../models/proprietary';
import Truck from '../../../../models/truck';
import { useParams } from 'react-router-dom';
import TruckService from '../../../../services/truck-service';
import { TupleType } from 'typescript';

export const TruckContext = createContext<TruckContextType>({
  types: [],
  proprietaries: [],
  plate: '',
  brand: '',
  model: '',
  color: '',
  modelYear: '',
  manufactureYear: '',
  type: '0',
  proprietary: '0',
  handlePlateChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleBrandChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleModelChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleColorChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleModelYearChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleManufactureYearChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleTypeChange: (e: ChangeEvent<HTMLSelectElement>) => {
    /** */
  },
  handleProprietaryChange: (e: ChangeEvent<HTMLSelectElement>) => {
    /** */
  },
  clearFields: () => {
    /** */
  },
  persistData: async () => {
    /** */
  },
});

const TruckProvider = (props: any) => {
  const [truck, setTruck] = useState(new Truck());

  const [types, setTypes] = useState<TruckType[]>([]);
  const [proprietaries, setProprietaries] = useState<Proprietary[]>([]);

  const [plate, setPlate] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [modelYear, setModelYear] = useState('');
  const [manufactureYear, setManufactureYear] = useState('');
  const [type, setType] = useState('0');
  const [proprietary, setProprietary] = useState('0');

  const [errorPlate, setErrorPlate] = useState<string | undefined>(undefined);
  const [errorBrand, setErrorBrand] = useState<string | undefined>(undefined);
  const [errorModel, setErrorModel] = useState<string | undefined>(undefined);
  const [errorColor, setErrorColor] = useState<string | undefined>(undefined);
  const [errorModelYear, setErrorModelYear] = useState<string | undefined>(undefined);
  const [errorManufactureYear, setErrorManufactureYear] = useState<string | undefined>(undefined);
  const [errorType, setErrorType] = useState<string | undefined>(undefined);
  const [errorProprietary, setErrorProprietary] = useState<string | undefined>(undefined);

  const routeParams = useParams();
  const method = routeParams.method as string;
  let id = 0;
  if (routeParams.id) id = Number.parseInt(routeParams.id);

  const getData = async () => {
    const service = new TruckService();
    const data = await service.getOne(id);

    if (data) {
      setTruck(data);
      setPlate(data.plate);
      setBrand(data.brand);
      setModel(data.model);
      setColor(data.color);
      setModelYear(data.modelYear.toString());
      setManufactureYear(data.manufactureYear.toString());
      setType((data.type as TruckType).id.toString());
      setProprietary((data.proprietary as Proprietary).id.toString());
    }
  };

  useEffect(() => {
    if (method == 'editar' && id) getData();
  }, []);

  const validate = {
    plate: (value: string) => {
      if (value.length <= 0) {
        return {
          message: 'A placa do caminhão precisa ser preenchida.',
          isValid: false,
        };
      } else if (value.length < 8) {
        return {
          message: 'A placa do caminhão é inválida.',
          isValid: false,
        };
      } else {
        truck.plate = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    brand: (value: string) => {
      if (value.length <= 0) {
        return {
          message: 'A marca do caminhão precisa ser preenchida.',
          isValid: false,
        };
      } else if (value.length < 3) {
        return {
          message: 'A marca do caminhão é inválida.',
          isValid: false,
        };
      } else {
        truck.brand = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    model: (value: string) => {
      if (value.length <= 0) {
        return {
          message: 'O modelo do caminhão precisa ser preenchido.',
          isValid: false,
        };
      } else if (value.length < 2) {
        return {
          message: 'O modelo do caminhão é inválido.',
          isValid: false,
        };
      } else {
        truck.model = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    color: (value: string) => {
      if (value.length <= 0) {
        return {
          message: 'A cor do caminhão precisa ser preenchida.',
          isValid: false,
        };
      } else if (value.length < 3) {
        return {
          message: 'A cor do caminhão é inválida.',
          isValid: false,
        };
      } else {
        truck.color = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    manufactureYear: (value: string) => {
      if (Number(value) < 1980) {
        return {
          message: 'O ano de fabricação do caminhão é inválida.',
          isValid: false,
        };
      } else {
        truck.manufactureYear = Number(value);
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    modelYear: (value: string) => {
      if (Number(value) < 1980) {
        return {
          message: 'O ano do modelo do caminhão é inválida.',
          isValid: false,
        };
      } else {
        truck.modelYear = Number(value);
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    type: (value: string) => {
      if (value == '0') {
        return {
          message: 'O tipo de caminhão precisa ser selecionado.',
          isValid: false,
        };
      } else {
        truck.type = types.find((item) => item.id == Number(value));
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    proprietary: (value: string) => {
      if (value == '0') {
        return {
          message: 'O proprietário do caminhão precisa ser selecionado.',
          isValid: false,
        };
      } else {
        truck.proprietary = proprietaries.find((item) => item.id == Number(value));
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
  };

  const handlePlateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlate(e.target.value.toUpperCase());
    setErrorPlate(validate.plate(e.target.value).message);
  };
  const handleBrandChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBrand(e.target.value);
    setErrorBrand(validate.brand(e.target.value).message);
  };
  const handleModelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setModel(e.target.value);
    setErrorModel(validate.model(e.target.value).message);
  };
  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    setErrorColor(validate.color(e.target.value).message);
  };
  const handleModelYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    setModelYear(e.target.value);
    setErrorModelYear(validate.modelYear(e.target.value).message);
  };
  const handleManufactureYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    setManufactureYear(e.target.value);
    setErrorManufactureYear(validate.manufactureYear(e.target.value).message);
  };
  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
    setErrorType(validate.type(e.target.value).message);
  };
  const handleProprietaryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setProprietary(e.target.value);
    setErrorProprietary(validate.proprietary(e.target.value).message);
  };

  const validateFields = () => {
    setErrorPlate(validate.plate(plate).message);
    setErrorBrand(validate.brand(brand).message);
    setErrorModel(validate.model(model).message);
    setErrorColor(validate.color(color).message);
    setErrorModelYear(validate.modelYear(modelYear).message);
    setErrorManufactureYear(validate.manufactureYear(manufactureYear).message);
    setErrorType(validate.type(type).message);
    setErrorProprietary(validate.proprietary(proprietary).message);

    return (
      validate.plate(plate).isValid &&
      validate.brand(brand).isValid &&
      validate.model(model).isValid &&
      validate.color(color).isValid &&
      validate.modelYear(modelYear).isValid &&
      validate.manufactureYear(manufactureYear).isValid &&
      validate.type(type).isValid &&
      validate.proprietary(proprietary).isValid
    );
  };

  const clearFields = () => {
    setPlate('');
    setBrand('');
    setModel('');
    setColor('');
    setModelYear('');
    setManufactureYear('');
    setType('0');
    setProprietary('0');
  };
  const persistData = async () => {
    if (validateFields()) {
      const service = new TruckService();
      if (method == 'novo') await service.save(truck);
      else await service.update(truck);
    }
  };

  return (
    <TruckContext.Provider
      value={{
        types,
        proprietaries,
        plate,
        brand,
        model,
        color,
        modelYear,
        manufactureYear,
        type,
        proprietary,
        errorPlate,
        errorBrand,
        errorModel,
        errorColor,
        errorModelYear,
        errorManufactureYear,
        errorType,
        errorProprietary,
        handlePlateChange,
        handleBrandChange,
        handleModelChange,
        handleColorChange,
        handleModelYearChange,
        handleManufactureYearChange,
        handleTypeChange,
        handleProprietaryChange,
        clearFields,
        persistData,
      }}
    >
      {props.children}
    </TruckContext.Provider>
  );
};

export default TruckProvider;
