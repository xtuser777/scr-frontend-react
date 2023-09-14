import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputText from '../../../shared/form-input-text';
import FormButton from '../../../shared/form-button';
import FormInputSelect from '../../../shared/form-input-select';
import FormLinkButton from '../../../shared/form-link-button';
import CategoriesContextType from '../../../../contexts/pages/management/categories/categories-context-type';
import { CategoriesContext } from '../../../../contexts/pages/management/categories/categories-context';

const FormCategoriesFilter = () => {
  const { filter, handleFilterChange, orderBy, handleOrderByChange, handleFilterClick } =
    useContext<CategoriesContextType>(CategoriesContext);
  return (
    <FieldsetCard
      legend="Filtragem de categorias de contas a pagar"
      obrigatoryFields={false}
    >
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
        </FormInputSelect>
        <FormLinkButton
          col={2}
          id="add"
          color="btn-success"
          label
          text="NOVO"
          link="/representacoes/gerenciar/categoria/novo"
        />
      </div>
    </FieldsetCard>
  );
};

export default FormCategoriesFilter;
