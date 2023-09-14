import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import PaymentFormContextType from '../../../../contexts/pages/management/payment-form/payment-form-context-type';
import { PaymentFormContext } from '../../../../contexts/pages/management/payment-form/payment-form-context';
import FormInputText from '../../../shared/form-input-text';
import FormInputSelect from '../../../shared/form-input-select';
import FormInputNumber from '../../../shared/form-input-number';

const FormPaymentFormData = () => {
  const {
    description,
    deadline,
    link,
    errorDescription,
    errorDeadline,
    errorLink,
    handleDescriptionChange,
    handleDeadlineChange,
    handleLinkChange,
  } = useContext<PaymentFormContextType>(PaymentFormContext);

  return (
    <FieldsetCard legend="Dados da forma de pagamento" obrigatoryFields>
      <div className="row">
        <FormInputText
          col={7}
          id="description"
          label="Descrição"
          obrigatory
          value={description}
          message={errorDescription}
          handle={handleDescriptionChange}
        />
        <FormInputSelect
          col={3}
          id="link"
          label="Vínculo"
          obrigatory
          value={link}
          message={errorLink}
          handle={handleLinkChange}
        >
          <option value="0">SELECIONE</option>
          <option value="1">Conta a Pagar</option>
          <option value="2">Conta a Receber</option>
        </FormInputSelect>
        <FormInputNumber
          col={2}
          id="deadline"
          label="Prazo"
          obrigatory
          value={deadline}
          message={errorDeadline}
          handle={handleDeadlineChange}
        />
      </div>
    </FieldsetCard>
  );
};

export default FormPaymentFormData;
