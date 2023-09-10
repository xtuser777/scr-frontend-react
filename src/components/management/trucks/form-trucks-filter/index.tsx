import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputText from '../../../shared/form-input-text';
import FormButton from '../../../shared/form-button';
import FormInputSelect from '../../../shared/form-input-select';
import FormLinkButton from '../../../shared/form-link-button';
import TrucksContextType from '../../../../contexts/pages/management/trucks/trucks-context-type';
import { TrucksContext } from '../../../../contexts/pages/management/trucks/trucks-context';

const FormTrucksFilter = () => {
  const { filter, handleFilterChange, orderBy, handleOrderByChange, handleFilterClick } =
    useContext<TrucksContextType>(TrucksContext);
  return (
    <FieldsetCard legend="Filtragem de Caminhões" obrigatoryFields={false}>
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
          <option value="3">PLACA (CRESCENTE)</option>
          <option value="4">PLACA (DECRESCENTE)</option>
          <option value="5">MARCA (CRESCENTE)</option>
          <option value="6">MARCA (DECRESCENTE)</option>
          <option value="7">MODELO (CRESCENTE)</option>
          <option value="8">MODELO (DECRESCENTE)</option>
          <option value="9">ANO (CRESCENTE)</option>
          <option value="10">ANO (DECRESCENTE)</option>
        </FormInputSelect>
        <FormLinkButton
          col={2}
          id="add"
          color="btn-success"
          label
          text="NOVO"
          link="/representacoes/gerenciar/caminhao/novo"
        />
      </div>
    </FieldsetCard>
  );
};

export default FormTrucksFilter;
