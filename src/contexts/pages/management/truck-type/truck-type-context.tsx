import { ChangeEvent, createContext, useEffect, useState } from 'react';
import TruckTypeContextType from './truck-type-context-type';
import TruckType from '../../../../models/truck-type';
import { useParams } from 'react-router-dom';
import TruckTypeService from '../../../../services/truck-type-service';

export const TruckTypeContext = createContext<TruckTypeContextType>({
  description: '',
  axes: 0,
  capacity: '',
  handleDescriptionChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleAxesChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleCapacityChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  clearFields: () => {
    /** */
  },
  persistData: async () => {
    /** */
  },
});

const TruckTypeProvider = (props: any) => {
  const [truckType, setTruckType] = useState(new TruckType());

  const [description, setDescription] = useState('');
  const [axes, setAxes] = useState(0);
  const [capacity, setCapacity] = useState('');

  const [errorDescription, setErrorDescription] = useState<string | undefined>(undefined);
  const [errorAxes, setErrorAxes] = useState<string | undefined>(undefined);
  const [errorCapacity, setErrorCapacity] = useState<string | undefined>(undefined);

  const routeParams = useParams();
  const method = routeParams.method as string;
  let id = 0;
  if (routeParams.id) id = Number.parseInt(routeParams.id);

  const getData = async () => {
    const service = new TruckTypeService();
    const data = await service.getOne(id);

    if (data) {
      setTruckType(data);
      setDescription(data.description);
      setAxes(data.axes);
      setCapacity(data.capacity.toString());
    }
  };

  useEffect(() => {
    if (method == 'editar' && id) getData();
  }, []);

  const validate = {
    description: (value: string) => {
      if (value.length <= 0) {
        return {
          message: 'A descrição do tipo precisa ser preenchido.',
          isValid: false,
        };
      } else {
        truckType.description = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    axes: (value: string) => {
      if (value.length <= 0 || Number(value) <= 0) {
        return {
          message: 'O número de eixos precisa ser preenchido.',
          isValid: false,
        };
      } else {
        truckType.axes = Number(value);
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    capacity: (value: string) => {
      if (value.length <= 0) {
        return {
          message: 'A capacidade precisa ser preenchida.',
          isValid: false,
        };
      } else {
        truckType.capacity = Number(value);
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
  const handleAxesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAxes(Number(e.target.value));
    setErrorAxes(validate.axes(e.target.value).message);
  };
  const handleCapacityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCapacity(e.target.value);
    setErrorCapacity(validate.capacity(e.target.value).message);
  };

  const validateFields = () => {
    setErrorDescription(validate.description(description).message);
    setErrorAxes(validate.axes(axes.toString()).message);
    setErrorCapacity(validate.capacity(capacity).message);

    return (
      validate.description(description).isValid &&
      validate.axes(axes.toString()).isValid &&
      validate.capacity(capacity).isValid
    );
  };

  const clearFields = () => {
    setDescription('');
    setAxes(0);
    setCapacity('');
  };
  const persistData = async () => {
    if (validateFields()) {
      const service = new TruckTypeService();
      if (method == 'novo') await service.save(truckType);
      else await service.update(truckType);
    }
  };

  return (
    <TruckTypeContext.Provider
      value={{
        description,
        axes,
        capacity,
        errorDescription,
        errorAxes,
        errorCapacity,
        handleDescriptionChange,
        handleAxesChange,
        handleCapacityChange,
        clearFields,
        persistData,
      }}
    >
      {props.children}
    </TruckTypeContext.Provider>
  );
};

export default TruckTypeProvider;
