import React, { useContext } from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormEnterprisePerson from '../../../components/shared/form-enterprise-person';
import FormContact from '../../../components/shared/form-contact';
import FormFooterButtons from '../../../components/shared/form-footer-buttons';
import RepresentationContextType from '../../../contexts/pages/management/representation/representation-contact-type';
import { RepresentationContext } from '../../../contexts/pages/management/representation/representation-contact';

const RepresentationPage = () => {
  const { clearFields, persistData } = useContext<RepresentationContextType>(RepresentationContext);

  return (
    <>
      <CardTitle title="Cadastrar Nova Representação" />
      <FormEnterprisePerson />
      <FormContact />
      <FormFooterButtons
        link="/representacoes/gerenciar/representacoes"
        clear
        save
        clearFields={clearFields}
        persistData={persistData}
      />
    </>
  );
};

export default RepresentationPage;
