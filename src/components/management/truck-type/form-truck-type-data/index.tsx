import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputText from '../../../shared/form-input-text';
import TruckTypeContextType from '../../../../contexts/pages/management/truck-type/truck-type-context-type';
import { TruckTypeContext } from '../../../../contexts/pages/management/truck-type/truck-type-context';
import FormInputNumber from '../../../shared/form-input-number';
import FormInputGroupText from '../../../shared/form-input-group-text';

const FormTruckTypeData = () => {
  const {
    description,
    axes,
    capacity,
    errorDescription,
    errorAxes,
    errorCapacity,
    handleDescriptionChange,
    handleAxesChange,
    handleCapacityChange,
  } = useContext<TruckTypeContextType>(TruckTypeContext);
  return (
    <FieldsetCard legend="Dados do tipo de caminhão" obrigatoryFields>
      <div className="row">
        <FormInputText
          col={6}
          id="description"
          label="Descrição"
          obrigatory
          value={description}
          message={errorDescription}
          handle={handleDescriptionChange}
        />
        <FormInputNumber
          col={3}
          id="axes"
          label="Eixos"
          value={axes}
          obrigatory
          message={errorAxes}
          handle={handleAxesChange}
        />
        <FormInputGroupText
          col={3}
          id="capacity"
          label="Capacidade"
          icon="glyphicon-scale"
          value={capacity}
          obrigatory
          message={errorCapacity}
          handle={handleCapacityChange}
        />
      </div>
    </FieldsetCard>
  );
};

export default FormTruckTypeData;
