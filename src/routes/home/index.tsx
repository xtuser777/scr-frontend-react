import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../components/shared/layout';
import HomeContext from '../../contexts/home/home-context';
import HomePage from '../../pages/home-page';

const HomeRoute = () => {
  return (
    <Route
      path="/"
      element={
        <HomeContext>
          <Layout>
            <HomePage />
          </Layout>
        </HomeContext>
      }
    />
  );
};

export default HomeRoute;
