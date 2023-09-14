import React from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormCategoriesFilter from '../../../components/management/categories/form-categories-filter';
import FormCategoriesTable from '../../../components/management/categories/form-categories-types-table';

const CategoriesPage = () => {
  return (
    <>
      <CardTitle title="Gerenciar Categorias de Contas a Pagar" />
      <FormCategoriesFilter />
      <FormCategoriesTable />
    </>
  );
};

export default CategoriesPage;
