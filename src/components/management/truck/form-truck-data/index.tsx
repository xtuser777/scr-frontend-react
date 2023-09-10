import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputText from '../../../shared/form-input-text';
import TruckContextType from '../../../../contexts/pages/management/truck/truck-context-type';
import { TruckContext } from '../../../../contexts/pages/management/truck/truck-context';
import { EnterprisePerson } from '../../../../models/EnterprisePerson';
import { IndividualPerson } from '../../../../models/IndividualPerson';
import FormInputSelect from '../../../shared/form-input-select';

const FormTruckData = () => {
  const {
    types,
    proprietaries,
    plate,
    brand,
    model,
    color,
    modelYear,
    manufactureYear,
    type,
    proprietary,
    errorPlate,
    errorBrand,
    errorModel,
    errorColor,
    errorModelYear,
    errorManufactureYear,
    errorType,
    errorProprietary,
    handlePlateChange,
    handleBrandChange,
    handleModelChange,
    handleColorChange,
    handleModelYearChange,
    handleManufactureYearChange,
    handleTypeChange,
    handleProprietaryChange,
  } = useContext<TruckContextType>(TruckContext);
  return (
    <FieldsetCard legend="Dados do caminhão" obrigatoryFields>
      <div className="row">
        <FormInputText
          col={2}
          id="placa"
          label="Placa"
          obrigatory
          value={plate}
          handle={handlePlateChange}
          message={errorPlate}
        />
        <FormInputText
          col={3}
          id="marca"
          label="Marca"
          obrigatory
          value={brand}
          handle={handleBrandChange}
          message={errorBrand}
        />
        <FormInputText
          col={4}
          id="modelo"
          label="Modelo"
          obrigatory
          value={model}
          handle={handleModelChange}
          message={errorModel}
        />
        <FormInputText
          col={3}
          id="cor"
          label="Cor"
          obrigatory
          value={color}
          handle={handleColorChange}
          message={errorColor}
        />
      </div>
      <div className="row">
        <FormInputText
          col={2}
          id="ano-fabricacao"
          label="Ano Fabricação"
          obrigatory
          value={manufactureYear}
          handle={handleManufactureYearChange}
          message={errorManufactureYear}
        />
        <FormInputText
          col={2}
          id="ano-modelo"
          label="Ano Modelo"
          obrigatory
          value={modelYear}
          handle={handleModelYearChange}
          message={errorModelYear}
        />
        <FormInputSelect
          col={3}
          id="tipo"
          label="Tipo"
          obrigatory
          value={type}
          handle={handleTypeChange}
          message={errorType}
        >
          <option value="0">SELECIONE</option>
          {types.map((item) => (
            <option key={item.id} value={item.id}>
              {item.description} - {item.axes} Eixos
            </option>
          ))}
        </FormInputSelect>
        <FormInputSelect
          col={5}
          id="proprietario"
          label="Proprietário"
          obrigatory
          value={proprietary}
          handle={handleProprietaryChange}
          message={errorProprietary}
        >
          <option value="0">SELECIONE</option>
          {proprietaries.map((item) => (
            <option key={item.id} value={item.id}>
              {item.person.type == 1
                ? (item.person.individual as IndividualPerson).name
                : (item.person.enterprise as EnterprisePerson).fantasyName}
            </option>
          ))}
        </FormInputSelect>
      </div>
    </FieldsetCard>
  );
};

export default FormTruckData;
