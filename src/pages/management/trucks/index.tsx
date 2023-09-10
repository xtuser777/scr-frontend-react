import React from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormTrucksFilter from '../../../components/management/trucks/form-trucks-filter';
import FormTrucksTable from '../../../components/management/trucks/form-trucks-table';

const TrucksPage = () => {
  return (
    <>
      <CardTitle title="Gerenciar Caminhões" />
      <FormTrucksFilter />
      <FormTrucksTable />
    </>
  );
};

export default TrucksPage;
