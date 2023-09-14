import React, { useContext } from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormPaymentFormData from '../../../components/management/payment-form/form-payment-form-data';
import { PaymentFormContext } from '../../../contexts/pages/management/payment-form/payment-form-context';
import PaymentFormContextType from '../../../contexts/pages/management/payment-form/payment-form-context-type';
import FormFooterButtons from '../../../components/shared/form-footer-buttons';

const PaymentFormPage = () => {
  const { clearFields, persistData } =
    useContext<PaymentFormContextType>(PaymentFormContext);
  return (
    <>
      <CardTitle title="Cadastrar nova forma de pagamento" />
      <FormPaymentFormData />
      <FormFooterButtons
        link="/representacoes/gerenciar/formaspagamento"
        clear
        save
        clearFields={clearFields}
        persistData={persistData}
      />
    </>
  );
};

export default PaymentFormPage;
