import React from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormProprietariesFilter from '../../../components/management/proprietaries/form-proprietaries-filter';
import FormProprietariesTable from '../../../components/management/proprietaries/form-proprietaries-table';

const ProprietariesPage = () => {
  return (
    <>
      <CardTitle title="Gerenciar Proprietários de Caminhões" />
      <FormProprietariesFilter />
      <FormProprietariesTable />
    </>
  );
};

export default ProprietariesPage;
