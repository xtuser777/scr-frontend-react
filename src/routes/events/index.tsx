import React from 'react';
import Layout from '../../components/shared/layout';
import HomeContext from '../../contexts/home/home-context';
import HomePage from '../../pages/home-page';
import { Protected } from '../../components/shared/protected';

const EventsRoute = () => {
  return (
    <Protected>
      <HomeContext>
        <Layout>
          <HomePage />
        </Layout>
      </HomeContext>
    </Protected>
  );
};

export default EventsRoute;
