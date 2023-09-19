import { ChangeEvent } from 'react';
import { IEmployee } from '../../../../models/employee';
import { ILevel } from '../../../../models/level';

export default interface FormAuthDataContextType {
  data: IEmployee;
  levels: ILevel[];
  level: string;
  login: string;
  password: string;
  passwordConfirm: string;
  errorLevel?: string;
  errorLogin?: string;
  errorPassword?: string;
  errorPasswordConfirm?: string;
  handleLevelChange: (e: ChangeEvent<HTMLSelectElement>) => Promise<void>;
  handleLoginChange: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordConfirmChange: (e: ChangeEvent<HTMLInputElement>) => void;
  validateFields: () => Promise<boolean>;
  clearFields: () => void;
  loadData: (data: IEmployee) => void;
}
