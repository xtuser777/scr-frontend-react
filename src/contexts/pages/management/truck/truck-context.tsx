import { ChangeEvent, createContext, useState } from 'react';
import TruckContextType from './truck-context-type';
import { ITruckType, TruckType } from '../../../../models/TruckType';
import { IProprietary, Proprietary } from '../../../../models/Proprietary';
import { Truck } from '../../../../models/Truck';

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

  const [types, setTypes] = useState<ITruckType[]>([]);
  const [proprietaries, setProprietaries] = useState<IProprietary[]>([]);

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
  const [errorManufactureYear, setErrorManufactureYear] = useState<string | undefined>(
    undefined,
  );
  const [errorType, setErrorType] = useState<string | undefined>(undefined);
  const [errorProprietary, setErrorProprietary] = useState<string | undefined>(undefined);

  const validate = {
    plate: (value: string) => {
      if (value.length <= 0) {
        setErrorPlate('A placa do caminhão precisa ser preenchida.');
        return false;
      } else if (value.length < 8) {
        setErrorPlate('A placa do caminhão é inválida.');
        return false;
      } else {
        setErrorPlate(undefined);
        truck.plate = value;
        return true;
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
        setErrorColor('A cor do caminhão precisa ser preenchida.');
        return false;
      } else if (value.length < 3) {
        setErrorColor('A cor do caminhão é inválida.');
        return false;
      } else {
        setErrorColor(undefined);
        truck.color = value;
        return true;
      }
    },
    manufactureYear: (value: string) => {
      if (Number(value) < 1980) {
        setErrorManufactureYear('O ano de fabricação do caminhão é inválida.');
        return false;
      } else {
        setErrorManufactureYear(undefined);
        truck.manufactureYear = Number(value);
        return true;
      }
    },
    modelYear: (value: string) => {
      if (Number(value) < 1980) {
        setErrorModelYear('O ano do modelo do caminhão é inválida.');
        return false;
      } else {
        setErrorModelYear(undefined);
        truck.modelYear = Number(value);
        return true;
      }
    },
    type: (value: string) => {
      if (value == '0') {
        setErrorType('O tipo de caminhão precisa ser selecionado.');
        return false;
      } else {
        setErrorType(undefined);
        truck.type = (
          types.find((item) => item.id == Number(value)) as TruckType
        ).toAttributes;
        return true;
      }
    },
    proprietary: (value: string) => {
      if (value == '0') {
        setErrorProprietary('O proprietário do caminhão precisa ser selecionado.');
        return false;
      } else {
        setErrorProprietary(undefined);
        truck.proprietary = (
          proprietaries.find((item) => item.id == Number(value)) as Proprietary
        ).toAttributes;
        return true;
      }
    },
  };

  const handlePlateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlate(e.target.value);
  };
  const handleBrandChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBrand(e.target.value);
  };
  const handleModelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setModel(e.target.value);
  };
  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  const handleModelYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    setModelYear(e.target.value);
  };
  const handleManufactureYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    setManufactureYear(e.target.value);
  };
  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };
  const handleProprietaryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setProprietary(e.target.value);
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
    /** */
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
