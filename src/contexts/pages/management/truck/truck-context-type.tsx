import { ChangeEvent } from 'react';
import { IProprietary } from '../../../../models/proprietary';
import { ITruckType } from '../../../../models/truck-type';

export default interface TruckContextType {
  types: ITruckType[];
  proprietaries: IProprietary[];
  plate: string;
  brand: string;
  model: string;
  color: string;
  modelYear: string;
  manufactureYear: string;
  type: string;
  proprietary: string;
  errorPlate?: string;
  errorBrand?: string;
  errorModel?: string;
  errorColor?: string;
  errorModelYear?: string;
  errorManufactureYear?: string;
  errorType?: string;
  errorProprietary?: string;
  handlePlateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBrandChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleModelChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleColorChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleModelYearChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleManufactureYearChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleTypeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleProprietaryChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  clearFields: () => void;
  persistData: () => Promise<void>;
}
