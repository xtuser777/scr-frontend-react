import React from 'react';
import Layout from '../../../components/shared/layout';
import TruckTypeContext from '../../../contexts/pages/management/truck-type/truck-type-context';
import TruckTypePage from '../../../pages/management/truck-type';

const TruckTypeRoute = () => {
  return (
    <TruckTypeContext>
      <Layout>
        <TruckTypePage />
      </Layout>
    </TruckTypeContext>
  );
};

export default TruckTypeRoute;
