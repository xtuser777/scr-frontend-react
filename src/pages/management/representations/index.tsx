import React from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormRepresentationsFilter from '../../../components/management/representations/form-representations-filter';
import FormRepresentationsTable from '../../../components/management/representations/form-representations-table';

const RepresentationsPage = () => {
  return (
    <>
      <CardTitle title="Gerenciar Representações" />
      <FormRepresentationsFilter />
      <FormRepresentationsTable />
    </>
  );
};

export default RepresentationsPage;
