import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputText from '../../../shared/form-input-text';
import FormInputDate from '../../../shared/form-input-date';
import FormButton from '../../../shared/form-button';
import FormInputSelect from '../../../shared/form-input-select';
import FormLinkButton from '../../../shared/form-link-button';
import EmployeesContextType from '../../../../contexts/pages/management/employees/employees-context-type';
import { EmployeesContext } from '../../../../contexts/pages/management/employees/employees-context';

const FormEmployeesFilter = () => {
  const {
    filter,
    admission,
    orderBy,
    handleFilterChange,
    handleAdmissionChange,
    handleOrderByChange,
    handleFilterClick,
  } = useContext<EmployeesContextType>(EmployeesContext);
  return (
    <FieldsetCard legend="Filtragem de funcionários" obrigatoryFields={false}>
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
          id="admission"
          label="Admissão"
          obrigatory={false}
          value={admission}
          handle={handleAdmissionChange}
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
          <option value="5">USUÁRIO (CRESCENTE)</option>
          <option value="6">USUÁRIO (DECRESCENTE)</option>
          <option value="7">NÍVEL (CRESCENTE)</option>
          <option value="8">NÍVEL (DECRESCENTE)</option>
          <option value="9">CPF (CRESCENTE)</option>
          <option value="10">CPF (DECRESCENTE)</option>
          <option value="11">ADMISSÃO (CRESCENTE)</option>
          <option value="12">ADMISSÃO (DECRESCENTE)</option>
          <option value="13">TIPO (CRESCENTE)</option>
          <option value="14">TIPO (DECRESCENTE)</option>
          <option value="15">ATIVO (CRESCENTE)</option>
          <option value="16">ATIVO (DECRESCENTE)</option>
          <option value="17">EMAIL (CRESCENTE)</option>
          <option value="18">EMAIL (DECRESCENTE)</option>
        </FormInputSelect>
        <FormLinkButton
          col={2}
          id="add"
          color="btn-success"
          label
          text="NOVO"
          link="/scr/gerenciar/funcionario/novo"
        />
      </div>
    </FieldsetCard>
  );
};

export default FormEmployeesFilter;
