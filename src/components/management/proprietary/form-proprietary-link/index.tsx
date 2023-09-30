import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputSelect from '../../../shared/form-input-select';
import { ProprietaryContext } from '../../../../contexts/pages/management/proprietary/proprietary-context';
import ProprietaryContextType from '../../../../contexts/pages/management/proprietary/proprietary-context-type';

const FormProprietaryLink = () => {
  const { drivers, driver, type, handleDriverChange, handleTypeChange } =
    useContext<ProprietaryContextType>(ProprietaryContext);

  return (
    <FieldsetCard legend="Vinculo do proprietário" obrigatoryFields>
      <div className="row">
        <FormInputSelect
          col={6}
          id="driver"
          label="Motorista"
          obrigatory={false}
          value={driver}
          message={undefined}
          handle={handleDriverChange}
        >
          <option value="0">SELECIONE</option>
          {
            drivers.map(
              d => (
                <option key={d.id} value={d.id}>{d.person?.individual?.name}</option>
              )
            )
          }
        </FormInputSelect>
        <FormInputSelect
          col={6}
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

export default FormProprietaryLink;
