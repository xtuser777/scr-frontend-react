import React from 'react';
import Layout from '../../../components/shared/layout';
import DriversContext from '../../../contexts/pages/management/drivers/drivers-context';
import DriversPage from '../../../pages/management/drivers';
import { Protected } from '../../../components/shared/protected';

const DriversRoute = () => {
  return (
    <Protected>
      <DriversContext>
        <Layout>
          <DriversPage />
        </Layout>
      </DriversContext>
    </Protected>
  );
};

export default DriversRoute;
