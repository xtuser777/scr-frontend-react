import React, { useContext } from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormEnterprisePerson from '../../../components/shared/form-enterprise-person';
import ParameterizationContextType from '../../../contexts/pages/configuration/parameterization/parameterization-context-type';
import { ParameterizationContext } from '../../../contexts/pages/configuration/parameterization/parameterization-context';
import FormContact from '../../../components/shared/form-contact';
import FormFooterButtons from '../../../components/shared/form-footer-buttons';

const ParameterizationPage = () => {
  const { persistData } = useContext<ParameterizationContextType>(ParameterizationContext);

  return (
    <div>
      <CardTitle title="Parameterização do Sistema" />
      <FormEnterprisePerson />
      <FormContact />
      <FormFooterButtons link="/" clear={false} save persistData={persistData} />
    </div>
  );
};

export default ParameterizationPage;
