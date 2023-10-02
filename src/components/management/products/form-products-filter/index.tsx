import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormButton from '../../../shared/form-button';
import FormInputSelect from '../../../shared/form-input-select';
import FormInputText from '../../../shared/form-input-text';
import FormLinkButton from '../../../shared/form-link-button';
import ProductsContextType from '../../../../contexts/pages/management/pruducts/products-context-type';
import { ProductsContext } from '../../../../contexts/pages/management/pruducts/products-context';
import Person from '../../../../models/person';

const FormProductsFilter = () => {
  const {
    data,
    products,
    representations,
    filter,
    representation,
    orderBy,
    handleFilterChange,
    handleOrderByChange,
    handleRepresentationChange,
    handleFilterClick,
  } = useContext<ProductsContextType>(ProductsContext);
  return (
    <FieldsetCard legend="Filtragem de Produtos" obrigatoryFields={false}>
      <div className="row">
        <FormInputText
          col={6}
          id="filtro"
          label="Filtro"
          obrigatory={false}
          value={filter}
          placeholder="Filtrar por descrição..."
          handle={handleFilterChange}
        />
        <FormInputSelect
          col={4}
          id="representacao"
          label="Representação"
          obrigatory={false}
          value={representation}
          handle={handleRepresentationChange}
        >
          <option value="0">SELECIONE</option>
          {representations.map((item) => (
            <option key={item.id} value={item.id}>
              {(item.person as Person).enterprise?.fantasyName + ' (' + item.unity + ')'}
            </option>
          ))}
        </FormInputSelect>
        <FormButton
          col={2}
          color="primary"
          id="filtrar"
          label
          text="FILTRAR"
          action={handleFilterClick}
        />
      </div>
      <div className="row">
        <FormInputSelect
          col={10}
          id="order"
          label="Ordernar por"
          obrigatory={false}
          value={orderBy}
          handle={handleOrderByChange}
        >
          <option value="1">REGISTRO (CRESCENTE)</option>
          <option value="2">REGISTRO (DECRESCENTE)</option>
          <option value="3">DESCRIÇÃO (CRESCENTE)</option>
          <option value="4">DESCRIÇÃO (DECRESCENTE)</option>
          <option value="5">MEDIDA (CRESCENTE)</option>
          <option value="6">MEDIDA (DECRESCENTE)</option>
          <option value="7">PREÇO (CRESCENTE)</option>
          <option value="8">PREÇO (DECRESCENTE)</option>
          <option value="9">REPRESENTAÇÃO (CRESCENTE)</option>
          <option value="10">REPRESENTAÇÃO (DECRESCENTE)</option>
        </FormInputSelect>
        <FormLinkButton
          col={2}
          color="success"
          id="novo"
          label
          text="NOVO"
          link="/scr/gerenciar/produto/novo"
        />
      </div>
    </FieldsetCard>
  );
};

export default FormProductsFilter;
