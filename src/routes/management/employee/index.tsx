import React from 'react';
import Layout from '../../../components/shared/layout';
import FormAuthDataContext from '../../../contexts/components/shared/form-auth-data/auth-data-context';
import FormContactContext from '../../../contexts/components/shared/form-contact/contact-context';
import FormIndividualPersonContext from '../../../contexts/components/shared/form-individual-person/individual-person-context';
import EmployeeContext from '../../../contexts/pages/management/employee/employee-context';
import EmployeePage from '../../../pages/management/employee';

const EmployeeRoute = () => {
  return (
    <FormAuthDataContext>
      <FormContactContext>
        <FormIndividualPersonContext>
          <EmployeeContext>
            <Layout>
              <EmployeePage />
            </Layout>
          </EmployeeContext>
        </FormIndividualPersonContext>
      </FormContactContext>
    </FormAuthDataContext>
  );
};

export default EmployeeRoute;
