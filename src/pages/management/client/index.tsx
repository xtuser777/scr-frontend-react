import React, { useContext } from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormIndividualPerson from '../../../components/shared/form-individual-person';
import FormEnterprisePerson from '../../../components/shared/form-enterprise-person';
import FormContact from '../../../components/shared/form-contact';
import FormFooterButtons from '../../../components/shared/form-footer-buttons';
import FormClientType from '../../../components/management/client/form-client-type';
import ClientContextType from '../../../contexts/pages/management/client/client-context-type';
import { ClientContext } from '../../../contexts/pages/management/client/client-context';

const ClientPage = () => {
  const { type, clearFields, persistData } = useContext<ClientContextType>(ClientContext);

  return (
    <>
      <CardTitle title="Cadastrar Novo Cliente" />
      <FormClientType />
      {type == '1' ? <FormIndividualPerson /> : <FormEnterprisePerson />}
      <FormContact />
      <FormFooterButtons
        link="/representacoes/gerenciar/clientes"
        clear
        save
        clearFields={clearFields}
        persistData={persistData}
      />
    </>
  );
};

export default ClientPage;
