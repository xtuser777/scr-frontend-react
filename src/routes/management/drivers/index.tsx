import React from 'react';
import Layout from '../../../components/shared/layout';
import DriversContext from '../../../contexts/pages/management/drivers/drivers-context';
import DriversPage from '../../../pages/management/drivers';

const DriversRoute = () => {
  return (
    <DriversContext>
      <Layout>
        <DriversPage />
      </Layout>
    </DriversContext>
  );
};

export default DriversRoute;
