import React from 'react';
import Layout from '../../../components/shared/layout';
import CategoryContext from '../../../contexts/pages/management/category/category-context';
import CategoryPage from '../../../pages/management/category';

const CategoryRoute = () => {
  return (
    <CategoryContext>
      <Layout>
        <CategoryPage />
      </Layout>
    </CategoryContext>
  );
};

export default CategoryRoute;
