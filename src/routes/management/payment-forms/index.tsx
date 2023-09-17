import React from 'react';
import Layout from '../../../components/shared/layout';
import PaymentFormsContext from '../../../contexts/pages/management/payment-forms/payment-forms-context';
import PaymentFormsPage from '../../../pages/management/payment-forms';

const PaymentFormsRoute = () => {
  return (
    <PaymentFormsContext>
      <Layout>
        <PaymentFormsPage />
      </Layout>
    </PaymentFormsContext>
  );
};

export default PaymentFormsRoute;
