import React from 'react';
import Layout from '../../../components/shared/layout';
import TruckContext from '../../../contexts/pages/management/truck/truck-context';
import TruckPage from '../../../pages/management/truck';

const TruckRoute = () => {
  return (
    <TruckContext>
      <Layout>
        <TruckPage />
      </Layout>
    </TruckContext>
  );
};

export default TruckRoute;
