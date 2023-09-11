import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputText from '../../../shared/form-input-text';
import FormButton from '../../../shared/form-button';
import FormInputSelect from '../../../shared/form-input-select';
import FormLinkButton from '../../../shared/form-link-button';
import TruckTypesContextType from '../../../../contexts/pages/management/truck-types/truck-types-context-type';
import { TruckTypesContext } from '../../../../contexts/pages/management/truck-types/truck-types-context';

const FormTruckTypesFilter = () => {
  const { filter, handleFilterChange, orderBy, handleOrderByChange, handleFilterClick } =
    useContext<TruckTypesContextType>(TruckTypesContext);
  return (
    <FieldsetCard legend="Filtragem de tipos de caminhões" obrigatoryFields={false}>
      <div className="row">
        <FormInputText
          col={10}
          id="filter"
          label="Filtro"
          obrigatory={false}
          value={filter}
          handle={handleFilterChange}
        />
        <FormButton
          col={2}
          id="do-filter"
          color="btn-primary"
          label
          text="FILTRAR"
          action={handleFilterClick}
        />
      </div>
      <div className="row">
        <FormInputSelect
          col={10}
          id="order-by"
          label="Ordernar por"
          obrigatory={false}
          value={orderBy}
          handle={handleOrderByChange}
        >
          <option value="1">REGISTRO (CRESCENTE)</option>
          <option value="2">REGISTRO (DECRESCENTE)</option>
          <option value="3">DESCRIÇÃO (CRESCENTE)</option>
          <option value="4">DESCRIÇÃO (DECRESCENTE)</option>
          <option value="5">EIXOS (CRESCENTE)</option>
          <option value="6">EIXOS (DECRESCENTE)</option>
          <option value="7">CAPACIDADE (CRESCENTE)</option>
          <option value="8">CAPACIDADE (DECRESCENTE)</option>
        </FormInputSelect>
        <FormLinkButton
          col={2}
          id="add"
          color="btn-success"
          label
          text="NOVO"
          link="/representacoes/gerenciar/tipocaminhao/novo"
        />
      </div>
    </FieldsetCard>
  );
};

export default FormTruckTypesFilter;
