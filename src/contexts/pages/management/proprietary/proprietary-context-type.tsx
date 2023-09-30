import { ChangeEvent } from 'react';
import Driver from '../../../../models/driver';

export default interface ProprietaryContextType {
  drivers: Driver[];
  driver: string;
  type: string;
  handleDriverChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleTypeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  clearFields: () => void;
  persistData: () => Promise<void>;
}
