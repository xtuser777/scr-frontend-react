import { ChangeEvent } from 'react';
import Product from '../../../../models/product';
import Representation from '../../../../models/representation';

export default interface ProductsContextType {
  data: Product[];
  products: Product[];
  representations: Representation[];
  filter: string;
  representation: string;
  orderBy: string;
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRepresentationChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleOrderByChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleFilterClick: () => void;
  remove: (id: number) => Promise<void>;
}
