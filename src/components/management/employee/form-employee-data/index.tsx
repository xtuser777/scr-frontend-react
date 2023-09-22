import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputDate from '../../../shared/form-input-date';
import FormInputSelect from '../../../shared/form-input-select';
import EmployeeContextType from '../../../../contexts/pages/management/employee/employee-context-type';
import { EmployeeContext } from '../../../../contexts/pages/management/employee/employee-context';

const FormEmployeeData = () => {
  const { admission, type, errorAdmission, errorType, handleAdmissionChange, handleTypeChange } =
    useContext<EmployeeContextType>(EmployeeContext);
  return (
    <FieldsetCard legend="Dados do funcionário" obrigatoryFields>
      <div className="row">
        <FormInputDate
          col={6}
          id="admission"
          label="Admissão"
          obrigatory
          value={admission}
          message={errorAdmission}
          handle={handleAdmissionChange}
        />
        <FormInputSelect
          col={6}
          id="type"
          label="Tipo"
          obrigatory
          value={type}
          message={errorType}
          handle={handleTypeChange}
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
