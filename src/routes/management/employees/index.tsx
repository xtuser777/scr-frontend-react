import React from 'react';
import Layout from '../../../components/shared/layout';
import EmployeesContext from '../../../contexts/pages/management/employees/employees-context';
import EmployeesPage from '../../../pages/management/employees';
import { Protected } from '../../../components/shared/protected';

const EmployeesRoute = () => {
  return (
    <Protected>
      <EmployeesContext>
        <Layout>
          <EmployeesPage />
        </Layout>
      </EmployeesContext>
    </Protected>
  );
};

export default EmployeesRoute;
