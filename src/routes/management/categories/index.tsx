import React from 'react';
import Layout from '../../../components/shared/layout';
import CategoriesContext from '../../../contexts/pages/management/categories/categories-context';
import CategoriesPage from '../../../pages/management/categories';

const CategoriesRoute = () => {
  return (
    <CategoriesContext>
      <Layout>
        <CategoriesPage />
      </Layout>
    </CategoriesContext>
  );
};

export default CategoriesRoute;
