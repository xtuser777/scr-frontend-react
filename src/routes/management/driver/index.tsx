import React from 'react';
import Layout from '../../../components/shared/layout';
import FormContactContext from '../../../contexts/components/shared/form-contact/contact-context';
import FormIndividualPersonContext from '../../../contexts/components/shared/form-individual-person/individual-person-context';
import DriverContext from '../../../contexts/pages/management/driver/driver-context';
import DriverPage from '../../../pages/management/driver';
import { Protected } from '../../../components/shared/protected';

const DriverRoute = () => {
  return (
    <Protected>
      <FormContactContext>
        <FormIndividualPersonContext>
          <DriverContext>
            <Layout>
              <DriverPage />
            </Layout>
          </DriverContext>
        </FormIndividualPersonContext>
      </FormContactContext>
    </Protected>
  );
};

export default DriverRoute;
