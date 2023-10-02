import React from 'react';
import Layout from '../../../components/shared/layout';
import { Protected } from '../../../components/shared/protected';
import ProductPage from '../../../pages/management/product';
import ProductContext from '../../../contexts/pages/management/product/product-context';

const ProductRoute = () => {
  return (
    <Protected>
      <ProductContext>
        <Layout>
          <ProductPage />
        </Layout>
      </ProductContext>
    </Protected>
  );
};

export default ProductRoute;
