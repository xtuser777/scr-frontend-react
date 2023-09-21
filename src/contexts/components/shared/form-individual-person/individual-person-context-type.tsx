import { ChangeEvent } from 'react';
import IndividualPerson from '../../../../models/individual-person';

export default interface FormIndividualPersonContextType {
  person: IndividualPerson;
  name: string;
  cpf: string;
  birth: string;
  errorName?: string;
  errorCpf?: string;
  errorBirth?: string;
  handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCpfChange: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  handleBirthChange: (e: ChangeEvent<HTMLInputElement>) => void;
  validateFields: () => Promise<boolean>;
  clearFields: () => void;
  loadPerson: (person: IndividualPerson, uniqueCpf: boolean) => void;
}
