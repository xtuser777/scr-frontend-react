import { ChangeEvent } from 'react';

export default interface CategoryContextType {
  description: string;
  errorDescription?: string;
  handleDescriptionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clearFields: () => void;
  persistData: () => Promise<void>;
}
