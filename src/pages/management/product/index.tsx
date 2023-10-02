import React, { useContext } from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormProductData from '../../../components/management/product/form-product-data';
import FormProductTruckTypes from '../../../components/management/product/form-product-truck-types';
import FormFooterButtons from '../../../components/shared/form-footer-buttons';
import ProductContextType from '../../../contexts/pages/management/product/product-context-type';
import { ProductContext } from '../../../contexts/pages/management/product/product-context';

const ProductPage = () => {
  const { clearFields, persistData } = useContext<ProductContextType>(ProductContext);
  return (
    <>
      <CardTitle title="Cadastrar Novo Produto" />
      <FormProductData />
      <FormProductTruckTypes />
      <FormFooterButtons
        link="/scr/gerenciar/produtos/"
        clear
        save
        clearFields={clearFields}
        persistData={persistData}
      />
    </>
  );
};

export default ProductPage;
