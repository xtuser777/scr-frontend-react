import { ChangeEvent } from 'react';

export default interface EmployeeContextType {
  admission: string;
  type: string;
  errorAdmission?: string;
  errorType?: string;
  handleAdmissionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleTypeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  clearFields: () => void;
  persistData: () => Promise<void>;
}
