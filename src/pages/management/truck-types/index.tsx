import React from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormTruckTypesFilter from '../../../components/management/truck-types/form-truck-types-filter';
import FormTruckTypesTable from '../../../components/management/truck-types/form-truck-types-table';

const TruckTypesPage = () => {
  return (
    <>
      <CardTitle title="Gerenciar Tipos de Caminhão" />
      <FormTruckTypesFilter />
      <FormTruckTypesTable />
    </>
  );
};

export default TruckTypesPage;
