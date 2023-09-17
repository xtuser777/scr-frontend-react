import React from 'react';
import Layout from '../../../components/shared/layout';
import TruckTypesContext from '../../../contexts/pages/management/truck-types/truck-types-context';
import TruckTypesPage from '../../../pages/management/truck-types';

const TruckTypesRoute = () => {
  return (
    <TruckTypesContext>
      <Layout>
        <TruckTypesPage />
      </Layout>
    </TruckTypesContext>
  );
};

export default TruckTypesRoute;
