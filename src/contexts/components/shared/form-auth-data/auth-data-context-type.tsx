import { ChangeEvent } from 'react';
import { IEmployee } from '../../../../models/Employee';

export default interface FormAuthDataContextType {
  data: IEmployee;
  login: string;
  password: string;
  passwordConfirm: string;
  errorLogin?: string;
  errorPassword?: string;
  errorPasswordConfirm?: string;
  handleLoginChange: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordConfirmChange: (e: ChangeEvent<HTMLInputElement>) => void;
  validateFields: () => Promise<boolean>;
  clearFields: () => void;
  loadData: (data: IEmployee) => void;
}
