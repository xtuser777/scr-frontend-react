import { ChangeEvent } from 'react';

export default interface TruckTypeContextType {
  description: string;
  axes: number;
  capacity: string;
  errorDescription?: string;
  errorAxes?: string;
  errorCapacity?: string;
  handleDescriptionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAxesChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCapacityChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clearFields: () => void;
  persistData: () => Promise<void>;
}
