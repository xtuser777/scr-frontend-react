import React, { useContext } from 'react';
import FieldsetCard from '../../shared/fieldset-card';
import FormButton from '../../shared/form-button';
import FormInputDate from '../../shared/form-input-date';
import FormInputSelect from '../../shared/form-input-select';
import FormInputText from '../../shared/form-input-text';
import { HomeContext } from '../../../contexts/home/home-context';
import { HomeContextType } from '../../../contexts/home/home-context-type';

const FormHomeDataSearch = () => {
  const {
    data,
    events,
    filter,
    date,
    orderType,
    handleFilterChange,
    handleDateChange,
    handleOrderTypeChange,
    handleFilterClick,
  } = useContext<HomeContextType>(HomeContext);

  return (
    <FieldsetCard legend="Filtragem dos Eventos" obrigatoryFields={false}>
      <div className="row">
        <FormInputText
          col={6}
          id="filter"
          label="Filtro"
          value={filter}
          obrigatory={false}
          handle={handleFilterChange}
        />

        <FormInputDate
          col={2}
          id="date"
          label="Data"
          value={date}
          obrigatory={false}
          handle={handleDateChange}
        />

        <FormInputSelect
          col={2}
          id="order-type"
          label="Tipo do Pedido"
          value={orderType}
          obrigatory={false}
          handle={handleOrderTypeChange}
        >
          <option value="0">SELECIONE</option>
          <option value="1">VENDA</option>
          <option value="2">FRETE</option>
        </FormInputSelect>

        <FormButton
          col={2}
          id="do-filter"
          label
          color="btn-primary"
          text="FILTRAR"
          action={handleFilterClick}
        />
      </div>
    </FieldsetCard>
  );
};

export default FormHomeDataSearch;
