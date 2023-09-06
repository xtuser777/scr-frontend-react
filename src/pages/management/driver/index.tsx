import React, { useContext } from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormIndividualPerson from '../../../components/shared/form-individual-person';
import FormContact from '../../../components/shared/form-contact';
import FormFooterButtons from '../../../components/shared/form-footer-buttons';
import DriverContextType from '../../../contexts/pages/management/driver/driver-context-type';
import { DriverContext } from '../../../contexts/pages/management/driver/driver-context';
import FormDriverData from '../../../components/management/driver/form-driver-data';
import FormDriverBankData from '../../../components/management/driver/form-driver-bank-data';

const DriverPage = () => {
  const { clearFields, persistData } = useContext<DriverContextType>(DriverContext);
  return (
    <>
      <CardTitle title="Cadastrar novo motorista" />
      <FormIndividualPerson />
      <div className="row">
        <div className="col-sm-4">
          <FormDriverData />
        </div>
        <div className="col-sm-8">
          <FormDriverBankData />
        </div>
      </div>
      <FormContact />
      <FormFooterButtons
        link="/representacoes/gerenciar/motoristas"
        clear
        save
        clearFields={clearFields}
        persistData={persistData}
      />
    </>
  );
};

export default DriverPage;
