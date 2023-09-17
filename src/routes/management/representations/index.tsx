import React from 'react';
import Layout from '../../../components/shared/layout';
import RepresentationsContext from '../../../contexts/pages/management/representations/representations-context';
import RepresentationsPage from '../../../pages/management/representations';

const RepresentationsRoute = () => {
  return (
    <RepresentationsContext>
      <Layout>
        <RepresentationsPage />
      </Layout>
    </RepresentationsContext>
  );
};

export default RepresentationsRoute;
