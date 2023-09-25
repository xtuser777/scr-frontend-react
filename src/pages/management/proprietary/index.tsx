import React, { useContext } from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormProprietaryLink from '../../../components/management/proprietary/form-proprietary-link';
import FormIndividualPerson from '../../../components/shared/form-individual-person';
import FormEnterprisePerson from '../../../components/shared/form-enterprise-person';
import FormContact from '../../../components/shared/form-contact';
import FormFooterButtons from '../../../components/shared/form-footer-buttons';
import ProprietaryContextType from '../../../contexts/pages/management/proprietary/proprietary-context-type';
import { ProprietaryContext } from '../../../contexts/pages/management/proprietary/proprietary-context';

const ProprietaryPage = () => {
  const { type, clearFields, persistData } = useContext<ProprietaryContextType>(ProprietaryContext);

  return (
    <>
      <CardTitle title="Cadastrar Novo Proprietário de Caminhão" />
      <FormProprietaryLink />
      {type == '1' ? <FormIndividualPerson /> : <FormEnterprisePerson />}
      <FormContact />
      <FormFooterButtons
        link="/representacoes/gerenciar/proprietarios"
        clear
        save
        clearFields={clearFields}
        persistData={persistData}
      />
    </>
  );
};

export default ProprietaryPage;
