import React from 'react';
import Layout from '../../../components/shared/layout';
import TruckContext from '../../../contexts/pages/management/truck/truck-context';
import TruckPage from '../../../pages/management/truck';
import { Protected } from '../../../components/shared/protected';

const TruckRoute = () => {
  return (
    <Protected>
      <TruckContext>
        <Layout>
          <TruckPage />
        </Layout>
      </TruckContext>
    </Protected>
  );
};

export default TruckRoute;
