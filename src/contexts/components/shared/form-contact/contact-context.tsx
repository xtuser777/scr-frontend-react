import { ChangeEvent, createContext, useState } from 'react';
import FormContactContextType from './contact-context-type';
import { Contact, IContact } from '../../../../models/Contact';
import { IState } from '../../../../models/State';
import { ICity } from '../../../../models/City';

export const FormContactContext = createContext<FormContactContextType>({
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
  loadContact: (contact: IContact) => {
    /** */
  },
});

const FormContactProvider = (props: any) => {
  const [contact, setContact] = useState<IContact>(new Contact().toAttributes);

  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);

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

  const handleStreetChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value);
  };
  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };
  const handleNeighborhoodChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNeighborhood(e.target.value);
  };
  const handleComplementChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComplement(e.target.value);
  };
  const handleCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };
  const handleStateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
  };
  const handleCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleCellphoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCellphone(e.target.value);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const loadContact = (contact: IContact) => {
    setContact(contact);
    setStreet(contact.address.street);
    setNumber(contact.address.number);
    setNeighborhood(contact.address.neighborhood);
    setComplement(contact.address.complement);
    setCode(contact.address.code);
    setState(contact.address.city.state.id.toString());
    setCities(states[contact.address.city.state.id - 1].cities);
    setCity(contact.address.city.id.toString());
    setPhone(contact.phone);
    setCellphone(contact.cellphone);
    setEmail(contact.email);
  };

  return (
    <FormContactContext.Provider
      value={{
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
        loadContact,
      }}
    >
      {props.children}
    </FormContactContext.Provider>
  );
};

export default FormContactProvider;
