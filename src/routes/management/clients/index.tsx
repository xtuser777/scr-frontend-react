import React from 'react';
import Layout from '../../../components/shared/layout';
import ClientsContext from '../../../contexts/pages/management/clients/clients-context';
import ClientsPage from '../../../pages/management/clients';
import { Protected } from '../../../components/shared/protected';

const ClientsRoute = () => {
  return (
    <Protected>
      <ClientsContext>
        <Layout>
          <ClientsPage />
        </Layout>
      </ClientsContext>
    </Protected>
  );
};

export default ClientsRoute;
