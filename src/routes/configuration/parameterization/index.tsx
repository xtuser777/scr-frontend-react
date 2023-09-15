import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../../components/shared/layout';
import FormContactContext from '../../../contexts/components/shared/form-contact/contact-context';
import FormEnterprisePersonContext from '../../../contexts/components/shared/form-enterprise-person/enterprise-person-context';
import ParameterizationContext from '../../../contexts/pages/configuration/parameterization/parameterization-contact';
import ParameterizationPage from '../../../pages/configuration/parameterization';

const ParameterizationRoute = () => {
  return (
    <Route
      path="/representacoes/configuracao/parametrizacao"
      element={
        <FormContactContext>
          <FormEnterprisePersonContext>
            <ParameterizationContext>
              <Layout>
                <ParameterizationPage />
              </Layout>
            </ParameterizationContext>
          </FormEnterprisePersonContext>
        </FormContactContext>
      }
    />
  );
};

export default ParameterizationRoute;
