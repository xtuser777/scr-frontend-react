import React, { useContext } from 'react';
import FieldsetCard from '../fieldset-card';
import FormInputText from '../form-input-text';
import FormEnterprisePersonContextType from '../../../contexts/components/shared/form-enterprise-person/enterprise-person-context-type';
import { FormEnterprisePersonContext } from '../../../contexts/components/shared/form-enterprise-person/enterprise-person-context';

const FormEnterprisePerson = () => {
  const {
    corporateName,
    fantasyName,
    cnpj,
    errorCorporateName,
    errorFantasyName,
    errorCnpj,
    handleCorporateNameChange,
    handleFantasyNameChange,
    handleCnpjChange,
  } = useContext<FormEnterprisePersonContextType>(FormEnterprisePersonContext);
  return (
    <FieldsetCard legend="Dados da Empresa" obrigatoryFields>
      <div className="row">
        <FormInputText
          col={5}
          id="corporate-name"
          label="Razão Social"
          obrigatory
          value={corporateName}
          message={errorCorporateName}
          handle={handleCorporateNameChange}
        />
        <FormInputText
          col={4}
          id="fantasy-name"
          label="Nome Fantasia"
          obrigatory
          value={fantasyName}
          message={errorFantasyName}
          handle={handleFantasyNameChange}
        />
        <FormInputText
          col={3}
          id="cnpj"
          label="CNPJ"
          obrigatory
          value={cnpj}
          message={errorCnpj}
          handle={handleCnpjChange}
        />
      </div>
    </FieldsetCard>
  );
};

export default FormEnterprisePerson;
