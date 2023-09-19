import React from 'react';
import Layout from '../../../components/shared/layout';
import FormContactContext from '../../../contexts/components/shared/form-contact/contact-context';
import FormEnterprisePersonContext from '../../../contexts/components/shared/form-enterprise-person/enterprise-person-context';
import ParameterizationContext from '../../../contexts/pages/configuration/parameterization/parameterization-context';
import ParameterizationPage from '../../../pages/configuration/parameterization';
import { Protected } from '../../../components/shared/protected';

const ParameterizationRoute = () => {
  return (
    <Protected>
      <FormContactContext>
        <FormEnterprisePersonContext>
          <ParameterizationContext>
            <Layout>
              <ParameterizationPage />
            </Layout>
          </ParameterizationContext>
        </FormEnterprisePersonContext>
      </FormContactContext>
    </Protected>
  );
};

export default ParameterizationRoute;
