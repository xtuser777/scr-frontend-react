import React from 'react';
import Layout from '../../components/shared/layout';
import HomeContext from '../../contexts/home/home-context';
import HomePage from '../../pages/home-page';

const HomeRoute = () => {
  return (
    <HomeContext>
      <Layout>
        <HomePage />
      </Layout>
    </HomeContext>
  );
};

export default HomeRoute;
