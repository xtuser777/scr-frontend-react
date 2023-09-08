import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputText from '../../../shared/form-input-text';
import FormInputSelect from '../../../shared/form-input-select';
import DriverContextType from '../../../../contexts/pages/management/driver/driver-context-type';
import { DriverContext } from '../../../../contexts/pages/management/driver/driver-context';

const FormDriverBankData = () => {
  const {
    bank,
    agency,
    account,
    type,
    errorBank,
    errorAgency,
    errorAccount,
    errorType,
    handleBankChange,
    handleAgencyChange,
    handleAccountChange,
    handleTypeChange,
  } = useContext<DriverContextType>(DriverContext);

  return (
    <FieldsetCard legend="Dados bancários" obrigatoryFields>
      <div className="row">
        <FormInputText
          col={2}
          id="bank"
          label="Banco"
          obrigatory
          value={bank}
          message={errorBank}
          handle={handleBankChange}
        />
        <FormInputText
          col={3}
          id="agency"
          label="Agência"
          obrigatory
          value={agency}
          message={errorAgency}
          handle={handleAgencyChange}
        />
        <FormInputText
          col={4}
          id="account"
          label="Conta c/ dígito"
          obrigatory
          value={account}
          message={errorAccount}
          handle={handleAccountChange}
        />
        <FormInputSelect
          col={3}
          id="type"
          label="Tipo"
          obrigatory
          value={type}
          message={errorType}
          handle={handleTypeChange}
        >
          <option value="0">SELECIONE</option>
          <option value="1">CORRENTE</option>
          <option value="2">POUPANÇA</option>
        </FormInputSelect>
      </div>
    </FieldsetCard>
  );
};

export default FormDriverBankData;
