import React from 'react';
import Layout from '../../../components/shared/layout';
import FormContactContext from '../../../contexts/components/shared/form-contact/contact-context';
import FormEnterprisePersonContext from '../../../contexts/components/shared/form-enterprise-person/enterprise-person-context';
import FormIndividualPersonContext from '../../../contexts/components/shared/form-individual-person/individual-person-context';
import ProprietaryContext from '../../../contexts/pages/management/proprietary/proprietary-context';
import ProprietaryPage from '../../../pages/management/proprietary';

const ProprietaryRoute = () => {
  return (
    <FormContactContext>
      <FormIndividualPersonContext>
        <FormEnterprisePersonContext>
          <ProprietaryContext>
            <Layout>
              <ProprietaryPage />
            </Layout>
          </ProprietaryContext>
        </FormEnterprisePersonContext>
      </FormIndividualPersonContext>
    </FormContactContext>
  );
};

export default ProprietaryRoute;
