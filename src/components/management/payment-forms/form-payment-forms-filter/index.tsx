import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormInputText from '../../../shared/form-input-text';
import FormButton from '../../../shared/form-button';
import FormInputSelect from '../../../shared/form-input-select';
import FormLinkButton from '../../../shared/form-link-button';
import PaymentFormsContextType from '../../../../contexts/pages/management/payment-forms/payment-forms-context-type';
import { PaymentFormsContext } from '../../../../contexts/pages/management/payment-forms/payment-forms-context';

const FormPaymentFormsFilter = () => {
  const { filter, handleFilterChange, orderBy, handleOrderByChange, handleFilterClick } =
    useContext<PaymentFormsContextType>(PaymentFormsContext);
  return (
    <FieldsetCard legend="Filtragem de formas de pagamento" obrigatoryFields={false}>
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
          <option value="5">VÍNCULO (CRESCENTE)</option>
          <option value="6">VÍNCULO (DECRESCENTE)</option>
          <option value="7">PRAZO (CRESCENTE)</option>
          <option value="8">PRAZO (DECRESCENTE)</option>
        </FormInputSelect>
        <FormLinkButton
          col={2}
          id="add"
          color="btn-success"
          label
          text="NOVO"
          link="/representacoes/gerenciar/formaspagamento/novo"
        />
      </div>
    </FieldsetCard>
  );
};

export default FormPaymentFormsFilter;
