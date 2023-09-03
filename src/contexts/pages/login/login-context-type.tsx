import { ChangeEvent } from 'react';

export default interface LoginContextType {
  user: string;
  password: string;
  errorUser?: string;
  errorPassword?: string;
  handleUserChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleLoginClick: () => Promise<void>;
}
