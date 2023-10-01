import React from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormProductsFilter from '../../../components/management/products/form-products-filter';
import FormProductsTable from '../../../components/management/products/form-products-table';

const ProductsPage = () => {
  return (
    <>
      <CardTitle title="Gerenciar Produtos" />
      <FormProductsFilter />
      <FormProductsTable />
    </>
  );
};

export default ProductsPage;
