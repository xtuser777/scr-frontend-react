import React from 'react';
import Layout from '../../../components/shared/layout';
import FormAuthDataContext from '../../../contexts/components/shared/form-auth-data/auth-data-context';
import FormContactContext from '../../../contexts/components/shared/form-contact/contact-context';
import FormIndividualPersonContext from '../../../contexts/components/shared/form-individual-person/individual-person-context';
import UserContext from '../../../contexts/pages/user/user-context';
import UserPage from '../../../pages/configuration/user-page';
import { Protected } from '../../../components/shared/protected';

const UserDataRoute = () => {
  return (
    <Protected>
      <Layout>
        <FormAuthDataContext>
          <FormContactContext>
            <FormIndividualPersonContext>
              <UserContext>
                <UserPage />
              </UserContext>
            </FormIndividualPersonContext>
          </FormContactContext>
        </FormAuthDataContext>
      </Layout>
    </Protected>
  );
};

export default UserDataRoute;
