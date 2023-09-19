import React from 'react';
import Layout from '../../../components/shared/layout';
import PaymentFormContext from '../../../contexts/pages/management/payment-form/payment-form-context';
import PaymentFormPage from '../../../pages/management/payment-form';
import { Protected } from '../../../components/shared/protected';

const PaymentFormRoute = () => {
  return (
    <Protected>
      <PaymentFormContext>
        <Layout>
          <PaymentFormPage />
        </Layout>
      </PaymentFormContext>
    </Protected>
  );
};

export default PaymentFormRoute;
