import { ChangeEvent } from 'react';
import { IState } from '../../../../models/State';
import { ICity } from '../../../../models/City';
import { IContact } from '../../../../models/Contact';

export default interface FormContactContextType {
  states: IState[];
  cities: ICity[];
  street: string;
  number: string;
  neighborhood: string;
  complement: string;
  code: string;
  state: string;
  city: string;
  phone: string;
  cellphone: string;
  email: string;
  errorStreet?: string;
  errorNumber?: string;
  errorNeighborhood?: string;
  errorCode?: string;
  errorState?: string;
  errorCity?: string;
  errorPhone?: string;
  errorCellphone?: string;
  errorEmail?: string;
  handleStreetChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleNumberChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleNeighborhoodChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleComplementChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCodeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleStateChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleCityChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handlePhoneChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCellphoneChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  loadContact: (contact: IContact) => void;
}
