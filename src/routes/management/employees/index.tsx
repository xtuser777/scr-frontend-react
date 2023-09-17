import React from 'react';
import Layout from '../../../components/shared/layout';
import EmployeesContext from '../../../contexts/pages/management/employees/employees-context';
import EmployeesPage from '../../../pages/management/employees';

const EmployeesRoute = () => {
  return (
    <EmployeesContext>
      <Layout>
        <EmployeesPage />
      </Layout>
    </EmployeesContext>
  );
};

export default EmployeesRoute;
