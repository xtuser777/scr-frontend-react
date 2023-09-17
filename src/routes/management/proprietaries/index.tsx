import React from 'react';
import Layout from '../../../components/shared/layout';
import ProprietariesContext from '../../../contexts/pages/management/proprietaries/proprietaries-context';
import ProprietariesPage from '../../../pages/management/proprietaries';

const ProprietariesRoute = () => {
  return (
    <ProprietariesContext>
      <Layout>
        <ProprietariesPage />
      </Layout>
    </ProprietariesContext>
  );
};

export default ProprietariesRoute;
