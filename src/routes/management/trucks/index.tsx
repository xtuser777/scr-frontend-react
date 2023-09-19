import React from 'react';
import Layout from '../../../components/shared/layout';
import TrucksContext from '../../../contexts/pages/management/trucks/trucks-context';
import TrucksPage from '../../../pages/management/trucks';
import { Protected } from '../../../components/shared/protected';

const TrucksRoute = () => {
  return (
    <Protected>
      <TrucksContext>
        <Layout>
          <TrucksPage />
        </Layout>
      </TrucksContext>
    </Protected>
  );
};

export default TrucksRoute;
