import { ChangeEvent } from 'react';

export default interface PaymentFormContextType {
  description: string;
  deadline: number;
  link: string;
  errorDescription?: string;
  errorDeadline?: string;
  errorLink?: string;
  handleDescriptionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDeadlineChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleLinkChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  clearFields: () => void;
  persistData: () => Promise<void>;
}
