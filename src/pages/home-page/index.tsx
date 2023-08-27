import React from 'react';
import CardTitle from '../../components/shared/card-title';
import FormHomeDataSearch from '../../components/home/form-home-data-search';
import FormHomeTable from '../../components/home/form-home-table';
import FormHomeReport from '../../components/home/form-home-report';

const HomePage = () => {
  return (
    <>
      <CardTitle title="Eventos do Sistema" />

      <FormHomeDataSearch />

      <FormHomeTable />

      <FormHomeReport />
    </>
  );
};

export default HomePage;
