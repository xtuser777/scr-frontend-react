import React from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormPaymentFormsFilter from '../../../components/management/payment-forms/form-payment-forms-filter';
import FormPaymentFormsTable from '../../../components/management/payment-forms/form-payment-forms-table';

const PaymentFormsPage = () => {
  return (
    <>
      <CardTitle title="Gerenciar Formas de Pagamento" />
      <FormPaymentFormsFilter />
      <FormPaymentFormsTable />
    </>
  );
};

export default PaymentFormsPage;
