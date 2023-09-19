import React from 'react';
import Layout from '../../../components/shared/layout';
import CategoriesContext from '../../../contexts/pages/management/categories/categories-context';
import CategoriesPage from '../../../pages/management/categories';
import { Protected } from '../../../components/shared/protected';

const CategoriesRoute = () => {
  return (
    <Protected>
      <CategoriesContext>
        <Layout>
          <CategoriesPage />
        </Layout>
      </CategoriesContext>
    </Protected>
  );
};

export default CategoriesRoute;
