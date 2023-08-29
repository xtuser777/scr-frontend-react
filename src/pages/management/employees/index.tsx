import React from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormEmployeesFilter from '../../../components/management/employees/form-employees-filter';
import FormEmployeesTable from '../../../components/management/employees/form-employees-table';

const EmployeesPage = () => {
  return (
    <div>
      <CardTitle title="Gerenciar Funcionários" />
      <FormEmployeesFilter />
      <FormEmployeesTable />
    </div>
  );
};

export default EmployeesPage;
