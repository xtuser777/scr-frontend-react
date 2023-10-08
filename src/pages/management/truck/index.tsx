import React, { useContext } from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormTruckData from '../../../components/management/truck/form-truck-data';
import FormFooterButtons from '../../../components/shared/form-footer-buttons';
import { TruckContext } from '../../../contexts/pages/management/truck/truck-context';
import TruckContextType from '../../../contexts/pages/management/truck/truck-context-type';

const TruckPage = () => {
  const { clearFields, persistData } = useContext<TruckContextType>(TruckContext);
  return (
    <>
      <CardTitle title="Cadastrar Novo Caminhão" />
      <FormTruckData />
      <FormFooterButtons
        link="/scr/gerenciar/caminhoes"
        clear
        save
        clearFields={clearFields}
        persistData={persistData}
      />
    </>
  );
};

export default TruckPage;
