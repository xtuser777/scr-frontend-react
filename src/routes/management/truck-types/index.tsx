import React from 'react';
import Layout from '../../../components/shared/layout';
import TruckTypesContext from '../../../contexts/pages/management/truck-types/truck-types-context';
import TruckTypesPage from '../../../pages/management/truck-types';
import { Protected } from '../../../components/shared/protected';

const TruckTypesRoute = () => {
  return (
    <Protected>
      <TruckTypesContext>
        <Layout>
          <TruckTypesPage />
        </Layout>
      </TruckTypesContext>
    </Protected>
  );
};

export default TruckTypesRoute;
