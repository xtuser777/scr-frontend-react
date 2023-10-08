import React, { useContext } from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormTruckTypeData from '../../../components/management/truck-type/form-truck-type-data';
import { TruckTypeContext } from '../../../contexts/pages/management/truck-type/truck-type-context';
import TruckTypeContextType from '../../../contexts/pages/management/truck-type/truck-type-context-type';
import FormFooterButtons from '../../../components/shared/form-footer-buttons';

const TruckTypePage = () => {
  const { clearFields, persistData } = useContext<TruckTypeContextType>(TruckTypeContext);
  return (
    <>
      <CardTitle title="Cadastrar Novo Tipo de Caminhão" />
      <FormTruckTypeData />
      <FormFooterButtons
        link="/scr/gerenciar/tiposcaminhao"
        clear
        save
        clearFields={clearFields}
        persistData={persistData}
      />
    </>
  );
};

export default TruckTypePage;
