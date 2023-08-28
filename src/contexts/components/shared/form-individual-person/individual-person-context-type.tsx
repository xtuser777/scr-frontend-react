import { ChangeEvent } from 'react';
import { IIndividualPerson } from '../../../../models/IndividualPerson';

export default interface FormIndividualPersonContextType {
  person: IIndividualPerson;
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
  loadPerson: (person: IIndividualPerson, uniqueCpf: boolean) => void;
}
