import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputSelect from '../../../shared/form-input-select';
import ClientContextType from '../../../../contexts/pages/management/client/client-context-type';
import { ClientContext } from '../../../../contexts/pages/management/client/client-context';

const FormClientType = () => {
  const { type, handleTypeChange } = useContext<ClientContextType>(ClientContext);

  return (
    <FieldsetCard legend="Tipo do cliente" obrigatoryFields>
      <div className="row">
        <FormInputSelect
          col={12}
          id="type"
          label="Tipo"
          obrigatory
          value={type}
          message={undefined}
          handle={handleTypeChange}
        >
          <option value="1">Física</option>
          <option value="2">Jurídica</option>
        </FormInputSelect>
      </div>
    </FieldsetCard>
  );
};

export default FormClientType;
