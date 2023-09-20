import { ChangeEvent } from 'react';
import { IBillPayCategory } from '../../../../models/bill-pay-category';

export default interface BillPayCategorysContextType {
  categories: IBillPayCategory[];
  filter: string;
  orderBy: string;
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOrderByChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleFilterClick: () => void;
  remove: (id: number) => Promise<void>;
}
