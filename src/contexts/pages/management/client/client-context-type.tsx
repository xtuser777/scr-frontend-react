import { ChangeEvent } from 'react';

export default interface ClientContextType {
  type: string;
  handleTypeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  clearFields: () => void;
  persistData: () => Promise<void>;
}
