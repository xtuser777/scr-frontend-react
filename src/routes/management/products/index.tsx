import React from 'react';
import Layout from '../../../components/shared/layout';
import { Protected } from '../../../components/shared/protected';
import ProductsPage from '../../../pages/management/products';
import ProductsContext from '../../../contexts/pages/management/pruducts/products-context';

const ProductsRoute = () => {
  return (
    <Protected>
      <ProductsContext>
        <Layout>
          <ProductsPage />
        </Layout>
      </ProductsContext>
    </Protected>
  );
};

export default ProductsRoute;
