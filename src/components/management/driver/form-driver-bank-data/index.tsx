import React from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputText from '../../../shared/form-input-text';
import FormInputSelect from '../../../shared/form-input-select';

const FormDriverBankData = () => {
  return (
    <FieldsetCard legend="Dados bancários" obrigatoryFields>
      <div className="row">
        <FormInputText
          col={2}
          id="bank"
          label="Banco"
          obrigatory
          value={''}
          message={undefined}
          handle={() => {
            /** */
          }}
        />
        <FormInputText
          col={3}
          id="agency"
          label="Agência"
          obrigatory
          value={''}
          message={undefined}
          handle={() => {
            /** */
          }}
        />
        <FormInputText
          col={4}
          id="account"
          label="Conta c/ dígito"
          obrigatory
          value={''}
          message={undefined}
          handle={() => {
            /** */
          }}
        />
        <FormInputSelect
          col={3}
          id="type"
          label="Tipo"
          obrigatory
          value={'0'}
          message={undefined}
          handle={() => {
            /** */
          }}
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
