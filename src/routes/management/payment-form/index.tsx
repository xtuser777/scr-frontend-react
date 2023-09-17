import React from 'react';
import Layout from '../../../components/shared/layout';
import PaymentFormContext from '../../../contexts/pages/management/payment-form/payment-form-context';
import PaymentFormPage from '../../../pages/management/payment-form';

const PaymentFormRoute = () => {
  return (
    <PaymentFormContext>
      <Layout>
        <PaymentFormPage />
      </Layout>
    </PaymentFormContext>
  );
};

export default PaymentFormRoute;
