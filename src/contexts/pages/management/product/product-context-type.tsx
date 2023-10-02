import { ChangeEvent } from 'react';
import Representation from '../../../../models/representation';
import TruckType from '../../../../models/truck-type';

export default interface ProductContextType {
  representations: Representation[];
  types: TruckType[];
  typesLinked: TruckType[];
  description: string;
  measure: string;
  weight: string;
  price: string;
  priceOut: string;
  representation: string;
  type: string;
  errorTypesLinked?: string;
  errorDescription?: string;
  errorRepresentation?: string;
  errorMeasure?: string;
  errorWeight?: string;
  errorPrice?: string;
  errorPriceOut?: string;
  errorType?: string;
  handleDescriptionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRepresentationChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleMeasureChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleWeightChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePriceChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePriceOutChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleTypeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  addType: () => void;
  delType: (id: number) => void;
  clearFields: () => void;
  persistData: () => Promise<void>;
}
