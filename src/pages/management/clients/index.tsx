import React from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormClientsFilter from '../../../components/management/clients/form-clients-filter';
import FormClientsTable from '../../../components/management/clients/form-clients-table';

const ClientsPage = () => {
  return (
    <>
      <CardTitle title="Gerenciar Clientes" />
      <FormClientsFilter />
      <FormClientsTable />
    </>
  );
};

export default ClientsPage;
