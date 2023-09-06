import React from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormDriversFilter from '../../../components/management/drivers/form-drivers-filter';
import FormDriversTable from '../../../components/management/drivers/form-drivers-table';

const DriversPage = () => {
  return (
    <>
      <CardTitle title="Gerenciar Motoristas" />
      <FormDriversFilter />
      <FormDriversTable />
    </>
  );
};

export default DriversPage;
