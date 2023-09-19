import React from 'react';
import Layout from '../../../components/shared/layout';
import FormContactContext from '../../../contexts/components/shared/form-contact/contact-context';
import FormEnterprisePersonContext from '../../../contexts/components/shared/form-enterprise-person/enterprise-person-context';
import RepresentationContext from '../../../contexts/pages/management/representation/representation-contact';
import RepresentationPage from '../../../pages/management/representation';
import { Protected } from '../../../components/shared/protected';

const RepresentationRoute = () => {
  return (
    <Protected>
      <FormContactContext>
        <FormEnterprisePersonContext>
          <RepresentationContext>
            <Layout>
              <RepresentationPage />
            </Layout>
          </RepresentationContext>
        </FormEnterprisePersonContext>
      </FormContactContext>
    </Protected>
  );
};

export default RepresentationRoute;
