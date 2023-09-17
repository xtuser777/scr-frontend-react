import React from 'react';
import Layout from '../../../components/shared/layout';
import ClientsContext from '../../../contexts/pages/management/clients/clients-context';
import ClientsPage from '../../../pages/management/clients';

const ClientsRoute = () => {
  return (
    <ClientsContext>
      <Layout>
        <ClientsPage />
      </Layout>
    </ClientsContext>
  );
};

export default ClientsRoute;
