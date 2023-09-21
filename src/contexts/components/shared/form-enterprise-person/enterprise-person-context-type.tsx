import { ChangeEvent } from 'react';
import EnterprisePerson from '../../../../models/enterprise-person';

export default interface FormEnterprisePersonContextType {
  person: EnterprisePerson;
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
  loadPerson: (person: EnterprisePerson) => void;
}
