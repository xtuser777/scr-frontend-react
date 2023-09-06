import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputText from '../../../shared/form-input-text';
import FormInputDate from '../../../shared/form-input-date';
import FormButton from '../../../shared/form-button';
import FormInputSelect from '../../../shared/form-input-select';
import FormLinkButton from '../../../shared/form-link-button';
import DriversContextType from '../../../../contexts/pages/management/drivers/drivers-context-type';
import { DriversContext } from '../../../../contexts/pages/management/drivers/drivers-context';

const FormDriversFilter = () => {
  const {
    filter,
    register,
    orderBy,
    handleFilterChange,
    handleRegisterChange,
    handleOrderByChange,
    handleFilterClick,
  } = useContext<DriversContextType>(DriversContext);
  return (
    <FieldsetCard legend="Filtragem de motoristas" obrigatoryFields={false}>
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
          <option value="3">NOME (CRESCENTE)</option>
          <option value="4">NOME (DECRESCENTE)</option>
          <option value="5">CPF (CRESCENTE)</option>
          <option value="6">CPF (DECRESCENTE)</option>
          <option value="7">CADASTRO (CRESCENTE)</option>
          <option value="8">CADASTRO (DECRESCENTE)</option>
          <option value="9">EMAIL (CRESCENTE)</option>
          <option value="10">EMAIL (DECRESCENTE)</option>
        </FormInputSelect>
        <FormLinkButton
          col={2}
          id="add"
          color="btn-success"
          label
          text="NOVO"
          link="/representacoes/gerenciar/motorista/novo"
        />
      </div>
    </FieldsetCard>
  );
};

export default FormDriversFilter;
