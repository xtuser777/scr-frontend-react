import React from 'react';
import Layout from '../../../components/shared/layout';
import ClientContext from '../../../contexts/pages/management/client/client-context';
import ClientPage from '../../../pages/management/client';

const ClientRoute = () => {
  return (
    <ClientContext>
      <Layout>
        <ClientPage />
      </Layout>
    </ClientContext>
  );
};

export default ClientRoute;
