import { ChangeEvent, createContext, useState, useEffect } from 'react';
import FormContactContextType from './contact-context-type';
import Contact from '../../../../models/contact';
import State from '../../../../models/state';
import City from '../../../../models/city';
import isEmail from 'validator/lib/isEmail';
import Address from '../../../../models/address';
import StateService from '../../../../services/state-service';

export const FormContactContext = createContext<FormContactContextType>({
  contact: new Contact(),
  states: [],
  cities: [],
  street: '',
  number: '',
  neighborhood: '',
  complement: '',
  code: '',
  state: '0',
  city: '0',
  phone: '',
  cellphone: '',
  email: '',
  handleStreetChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleNumberChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleNeighborhoodChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleComplementChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleCodeChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleStateChange: (e: ChangeEvent<HTMLSelectElement>) => {
    /** */
  },
  handleCityChange: (e: ChangeEvent<HTMLSelectElement>) => {
    /** */
  },
  handlePhoneChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleCellphoneChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  validateFields: () => false,
  clearFields: () => {
    /** */
  },
  loadContact: async (contact: Contact) => {
    /** */
  },
});

const FormContactProvider = (props: any) => {
  const [contact, setContact] = useState<Contact>(new Contact());

  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);

  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [complement, setComplement] = useState('');
  const [code, setCode] = useState('');
  const [state, setState] = useState('0');
  const [city, setCity] = useState('0');

  const [phone, setPhone] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [email, setEmail] = useState('');

  const [errorStreet, setErrorStreet] = useState<string | undefined>(undefined);
  const [errorNumber, setErrorNumber] = useState<string | undefined>(undefined);
  const [errorNeighborhood, setErrorNeighborhood] = useState<string | undefined>(
    undefined,
  );
  const [errorCode, setErrorCode] = useState<string | undefined>(undefined);
  const [errorState, setErrorState] = useState<string | undefined>(undefined);
  const [errorCity, setErrorCity] = useState<string | undefined>(undefined);
  const [errorPhone, setErrorPhone] = useState<string | undefined>(undefined);
  const [errorCellphone, setErrorCellphone] = useState<string | undefined>(undefined);
  const [errorEmail, setErrorEmail] = useState<string | undefined>(undefined);

  const getStates = async () => {
    const service = new StateService();
    const states = await service.get();
    setStates(states);

    return states;
  };

  useEffect(() => {
    if (states.length == 0) getStates();
  }, []);

  const validate = {
    street: (value: string) => {
      if (value.length == 0) {
        return {
          message: 'A rua precisa ser preenchida',
          isValid: false,
        };
      } else {
        (contact.address as Address).street = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    number: (value: string) => {
      if (value.length == 0) {
        return {
          message: 'O número precisa ser preenchido',
          isValid: false,
        };
      } else {
        (contact.address as Address).number = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    neighborhood: (value: string) => {
      if (value.length == 0) {
        return {
          message: 'O bairro precisa ser preenchido',
          isValid: false,
        };
      } else {
        (contact.address as Address).neighborhood = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    code: (value: string) => {
      if (value.length == 0) {
        return {
          message: 'O CEP precisa ser preenchido',
          isValid: false,
        };
      } else if (value.length < 10) {
        return {
          message: 'O CEP preenchido é inválido',
          isValid: false,
        };
      } else {
        (contact.address as Address).code = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    state: (value: string) => {
      if (value == '0') {
        return {
          message: 'O Estado precisa ser selecionado',
          isValid: false,
        };
      } else {
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    city: (value: string) => {
      if (value == '0') {
        return {
          message: 'A cidade precisa ser selecionada',
          isValid: false,
        };
      } else {
        (contact.address as Address).city = cities.find(
          (item) => item.id == Number(value),
        );
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    phone: (value: string) => {
      if (value.length == 0) {
        return {
          message: 'O telefone precisa ser preenchido',
          isValid: false,
        };
      } else if (value.length < 14) {
        return {
          message: 'O telefone preenchido é inválido',
          isValid: false,
        };
      } else {
        contact.phone = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    cellphone: (value: string) => {
      if (value.length == 0) {
        return {
          message: 'O celular precisa ser preenchido',
          isValid: false,
        };
      } else if (value.length < 15) {
        return {
          message: 'O celular preenchido é inválido',
          isValid: false,
        };
      } else {
        contact.cellphone = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    email: (value: string) => {
      if (value.length == 0) {
        return {
          message: 'O e-mail precisa ser preenchido',
          isValid: false,
        };
      } else if (!isEmail(value)) {
        return {
          message: 'O e-mail preenchido é inválido',
          isValid: false,
        };
      } else {
        contact.email = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
  };

  const handleStreetChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value);
    setErrorStreet(validate.street(e.target.value).message);
  };
  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
    setErrorNumber(validate.number(e.target.value).message);
  };
  const handleNeighborhoodChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNeighborhood(e.target.value);
    setErrorNeighborhood(validate.neighborhood(e.target.value).message);
  };
  const handleComplementChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComplement(e.target.value);
  };
  const handleCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
    setErrorCode(validate.code(e.target.value).message);
  };
  const handleStateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
    setErrorState(validate.state(e.target.value).message);
  };
  const handleCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
    setErrorCity(validate.city(e.target.value).message);
  };
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setErrorPhone(validate.phone(e.target.value).message);
  };
  const handleCellphoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCellphone(e.target.value);
    setErrorCellphone(validate.cellphone(e.target.value).message);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrorEmail(validate.email(e.target.value).message);
  };

  const validateFields = () => {
    setErrorStreet(validate.street(street).message);
    setErrorNumber(validate.number(number).message);
    setErrorNeighborhood(validate.neighborhood(neighborhood).message);
    setErrorCode(validate.code(code).message);
    setErrorState(validate.state(state).message);
    setErrorCity(validate.city(city).message);
    setErrorPhone(validate.phone(phone).message);
    setErrorCellphone(validate.cellphone(cellphone).message);
    setErrorEmail(validate.email(email).message);

    return (
      validate.street(street).isValid &&
      validate.number(number).isValid &&
      validate.neighborhood(neighborhood).isValid &&
      validate.code(code).isValid &&
      validate.state(state).isValid &&
      validate.city(city).isValid &&
      validate.phone(phone).isValid &&
      validate.cellphone(cellphone).isValid &&
      validate.email(email).isValid
    );
  };

  const clearFields = () => {
    setStreet('');
    setNumber('');
    setNeighborhood('');
    setComplement('');
    setCode('');
    setState('');
    setCities([]);
    setCity('0');
    setPhone('');
    setCellphone('');
    setEmail('');
  };

  const loadContact = async (contact: Contact) => {
    setContact(contact);
    setStreet((contact.address as Address).street);
    setNumber((contact.address as Address).number);
    setNeighborhood((contact.address as Address).neighborhood);
    setComplement((contact.address as Address).complement);
    setCode((contact.address as Address).code);
    setState((((contact.address as Address).city as City).state as State).id.toString());
    const states = await getStates();
    setCities(
      states[(((contact.address as Address).city as City).state as State).id - 1].cities,
    );
    setCity(((contact.address as Address).city as City).id.toString());
    setPhone(contact.phone);
    setCellphone(contact.cellphone);
    setEmail(contact.email);
    setErrorEmail(validate.email(contact.email).message);
  };

  return (
    <FormContactContext.Provider
      value={{
        contact,
        states,
        cities,
        street,
        number,
        neighborhood,
        complement,
        code,
        state,
        city,
        phone,
        cellphone,
        email,
        errorStreet,
        errorNumber,
        errorNeighborhood,
        errorCode,
        errorState,
        errorCity,
        errorPhone,
        errorCellphone,
        errorEmail,
        handleStreetChange,
        handleNumberChange,
        handleNeighborhoodChange,
        handleComplementChange,
        handleCodeChange,
        handleStateChange,
        handleCityChange,
        handlePhoneChange,
        handleCellphoneChange,
        handleEmailChange,
        validateFields,
        clearFields,
        loadContact,
      }}
    >
      {props.children}
    </FormContactContext.Provider>
  );
};

export default FormContactProvider;
