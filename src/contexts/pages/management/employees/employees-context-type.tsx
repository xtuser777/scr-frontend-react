import { ChangeEvent } from 'react';
import { IEmployee } from '../../../../models/employee';

export default interface EmployeesContextType {
  employees: IEmployee[];
  filter: string;
  admission: string;
  orderBy: string;
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAdmissionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOrderByChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleFilterClick: () => void;
  desactivate: (id: number) => Promise<void>;
  reactivate: (id: number) => Promise<void>;
  remove: (id: number) => Promise<void>;
}
