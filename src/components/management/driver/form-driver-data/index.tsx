import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputText from '../../../shared/form-input-text';
import DriverContextType from '../../../../contexts/pages/management/driver/driver-context-type';
import { DriverContext } from '../../../../contexts/pages/management/driver/driver-context';

const FormDriverData = () => {
  const { cnh, errorCnh, handleCnhChange } = useContext<DriverContextType>(DriverContext);

  return (
    <FieldsetCard legend="Dados do motorista" obrigatoryFields>
      <div className="row">
        <FormInputText
          col={12}
          id="cnh"
          label="CNH"
          obrigatory
          value={cnh}
          message={errorCnh}
          handle={handleCnhChange}
        />
      </div>
    </FieldsetCard>
  );
};

export default FormDriverData;
