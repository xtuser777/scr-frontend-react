import React from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputDate from '../../../shared/form-input-date';
import FormInputSelect from '../../../shared/form-input-select';

const FormEmployeeData = () => {
  return (
    <FieldsetCard legend="Dados do funcionário" obrigatoryFields>
      <div className="row">
        <FormInputDate
          col={6}
          id="admission"
          label="Admissão"
          obrigatory
          value={''}
          message={undefined}
          handle={() => {
            /** */
          }}
        />
        <FormInputSelect
          col={6}
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
          <option value="1">INTERNO</option>
          <option value="2">VENDEDOR</option>
        </FormInputSelect>
      </div>
    </FieldsetCard>
  );
};

export default FormEmployeeData;
