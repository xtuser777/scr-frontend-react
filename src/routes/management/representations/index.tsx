import React from 'react';
import Layout from '../../../components/shared/layout';
import RepresentationsContext from '../../../contexts/pages/management/representations/representations-context';
import RepresentationsPage from '../../../pages/management/representations';
import { Protected } from '../../../components/shared/protected';

const RepresentationsRoute = () => {
  return (
    <Protected>
      <RepresentationsContext>
        <Layout>
          <RepresentationsPage />
        </Layout>
      </RepresentationsContext>
    </Protected>
  );
};

export default RepresentationsRoute;
