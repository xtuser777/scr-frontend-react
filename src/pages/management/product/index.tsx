import React from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormProductData from '../../../components/management/product/form-product-data';
import FormProductTruckTypes from '../../../components/management/product/form-product-truck-types';
import FormFooterButtons from '../../../components/shared/form-footer-buttons';

const ProductPage = () => {
  return (
    <>
      <CardTitle title="Cadastrar Novo Produto" />
      <FormProductData />
      <FormProductTruckTypes />
      <FormFooterButtons
        link="/scr/gerenciar/produtos/"
        clear
        save
        clearFields={() => {
          /** */
        }}
        persistData={async () => {
          /** */
        }}
      />
    </>
  );
};

export default ProductPage;
