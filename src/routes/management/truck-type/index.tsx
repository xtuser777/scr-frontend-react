import React from 'react';
import Layout from '../../../components/shared/layout';
import TruckTypeContext from '../../../contexts/pages/management/truck-type/truck-type-context';
import TruckTypePage from '../../../pages/management/truck-type';
import { Protected } from '../../../components/shared/protected';

const TruckTypeRoute = () => {
  return (
    <Protected>
      <TruckTypeContext>
        <Layout>
          <TruckTypePage />
        </Layout>
      </TruckTypeContext>
    </Protected>
  );
};

export default TruckTypeRoute;
