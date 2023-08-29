import { ChangeEvent } from 'react';
import { IEnterprisePerson } from '../../../../models/EnterprisePerson';

export default interface FormEnterprisePersonContextType {
  person: IEnterprisePerson;
  corporateName: string;
  fantasyName: string;
  cnpj: string;
  errorCorporateName?: string;
  errorFantasyName?: string;
  errorCnpj?: string;
  handleCorporateNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFantasyNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCnpjChange: (e: ChangeEvent<HTMLInputElement>) => void;
  validateFields: () => boolean;
  clearFields: () => void;
  loadPerson: (person: IEnterprisePerson) => void;
}
