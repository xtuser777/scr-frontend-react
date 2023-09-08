import { ChangeEvent } from 'react';

export default interface DriverContextType {
  cnh: string;
  bank: string;
  agency: string;
  account: string;
  type: string;
  errorCnh?: string;
  errorBank?: string;
  errorAgency?: string;
  errorAccount?: string;
  errorType?: string;
  handleCnhChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBankChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAgencyChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAccountChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleTypeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  clearFields: () => void;
  persistData: () => Promise<void>;
}
