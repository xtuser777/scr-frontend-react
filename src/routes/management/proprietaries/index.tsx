import React from 'react';
import Layout from '../../../components/shared/layout';
import ProprietariesContext from '../../../contexts/pages/management/proprietaries/proprietaries-context';
import ProprietariesPage from '../../../pages/management/proprietaries';
import { Protected } from '../../../components/shared/protected';

const ProprietariesRoute = () => {
  return (
    <Protected>
      <ProprietariesContext>
        <Layout>
          <ProprietariesPage />
        </Layout>
      </ProprietariesContext>
    </Protected>
  );
};

export default ProprietariesRoute;
