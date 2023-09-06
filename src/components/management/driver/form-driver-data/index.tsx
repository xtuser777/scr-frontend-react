import React from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputText from '../../../shared/form-input-text';

const FormDriverData = () => {
  return (
    <FieldsetCard legend="Dados do motorista" obrigatoryFields>
      <div className="row">
        <FormInputText
          col={12}
          id="cnh"
          label="CNH"
          obrigatory
          value={''}
          message={undefined}
          handle={() => {
            /** */
          }}
        />
      </div>
    </FieldsetCard>
  );
};

export default FormDriverData;
