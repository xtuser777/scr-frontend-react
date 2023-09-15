import React, { useContext } from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormCategoryData from '../../../components/management/category/form-category-data';
import { CategoryContext } from '../../../contexts/pages/management/category/category-context';
import CategoryContextType from '../../../contexts/pages/management/category/category-context-type';
import FormFooterButtons from '../../../components/shared/form-footer-buttons';

const CategoryPage = () => {
  const { clearFields, persistData } = useContext<CategoryContextType>(CategoryContext);
  return (
    <>
      <CardTitle title="Cadastrar nova categoria de contas a pagar" />
      <FormCategoryData />
      <FormFooterButtons
        link="/representacoes/gerenciar/categorias/"
        clear
        save
        clearFields={clearFields}
        persistData={persistData}
      />
    </>
  );
};

export default CategoryPage;
