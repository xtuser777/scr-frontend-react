import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputText from '../../../shared/form-input-text';
import FormInputDate from '../../../shared/form-input-date';
import FormButton from '../../../shared/form-button';
import FormInputSelect from '../../../shared/form-input-select';
import FormLinkButton from '../../../shared/form-link-button';
import RepresentationsContextType from '../../../../contexts/pages/management/representations/representations-context-type';
import { RepresentationsContext } from '../../../../contexts/pages/management/representations/representations-context';

const FormRepresentationsFilter = () => {
  const {
    filter,
    handleFilterChange,
    register,
    handleRegisterChange,
    orderBy,
    handleOrderByChange,
    handleFilterClick,
  } = useContext<RepresentationsContextType>(RepresentationsContext);
  return (
    <FieldsetCard legend="Filtragem de Representações" obrigatoryFields={false}>
      <div className="row">
        <FormInputText
          col={8}
          id="filter"
          label="Filtro"
          obrigatory={false}
          value={filter}
          handle={handleFilterChange}
        />
        <FormInputDate
          col={2}
          id="register"
          label="Cadastro"
          obrigatory={false}
          value={register}
          handle={handleRegisterChange}
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
          <option value="3">NOME FANTASIA (CRESCENTE)</option>
          <option value="4">NOME FANTASIA (DECRESCENTE)</option>
          <option value="5">CNPJ (CRESCENTE)</option>
          <option value="6">CNPJ (DECRESCENTE)</option>
          <option value="7">CADASTRO (CRESCENTE)</option>
          <option value="8">CADASTRO (DECRESCENTE)</option>
          <option value="9">UNIDADE (CRESCENTE)</option>
          <option value="10">UNIDADE (DECRESCENTE)</option>
          <option value="11">EMAIL (CRESCENTE)</option>
          <option value="12">EMAIL (DECRESCENTE)</option>
        </FormInputSelect>
        <FormLinkButton
          col={2}
          id="add"
          color="btn-success"
          label
          text="NOVO"
          link="/representacoes/gerenciar/representacao/novo"
        />
      </div>
    </FieldsetCard>
  );
};

export default FormRepresentationsFilter;
