import { ChangeEvent } from 'react';

export default interface ProprietaryContextType {
  driver: string;
  type: string;
  handleDriverChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleTypeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  clearFields: () => void;
  persistData: () => Promise<void>;
}
