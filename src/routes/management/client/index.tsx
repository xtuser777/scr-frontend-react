import React from 'react';
import Layout from '../../../components/shared/layout';
import ClientContext from '../../../contexts/pages/management/client/client-context';
import ClientPage from '../../../pages/management/client';
import { Protected } from '../../../components/shared/protected';

const ClientRoute = () => {
  return (
    <Protected>
      <ClientContext>
        <Layout>
          <ClientPage />
        </Layout>
      </ClientContext>
    </Protected>
  );
};

export default ClientRoute;
