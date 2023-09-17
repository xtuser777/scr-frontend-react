import React from 'react';
import Layout from '../../../components/shared/layout';
import TrucksContext from '../../../contexts/pages/management/trucks/trucks-context';
import TrucksPage from '../../../pages/management/trucks';

const TrucksRoute = () => {
  return (
    <TrucksContext>
      <Layout>
        <TrucksPage />
      </Layout>
    </TrucksContext>
  );
};

export default TrucksRoute;
