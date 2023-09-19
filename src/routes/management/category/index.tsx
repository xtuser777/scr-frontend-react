import React from 'react';
import Layout from '../../../components/shared/layout';
import CategoryContext from '../../../contexts/pages/management/category/category-context';
import CategoryPage from '../../../pages/management/category';
import { Protected } from '../../../components/shared/protected';

const CategoryRoute = () => {
  return (
    <Protected>
      <CategoryContext>
        <Layout>
          <CategoryPage />
        </Layout>
      </CategoryContext>
    </Protected>
  );
};

export default CategoryRoute;
