import React from 'react';
import Layout from '../../../components/shared/layout';
import PaymentFormsContext from '../../../contexts/pages/management/payment-forms/payment-forms-context';
import PaymentFormsPage from '../../../pages/management/payment-forms';
import { Protected } from '../../../components/shared/protected';

const PaymentFormsRoute = () => {
  return (
    <Protected>
      <PaymentFormsContext>
        <Layout>
          <PaymentFormsPage />
        </Layout>
      </PaymentFormsContext>
    </Protected>
  );
};

export default PaymentFormsRoute;
