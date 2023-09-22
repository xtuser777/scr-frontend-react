import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormTable from '../../../shared/form-table';
import { PaymentFormsContext } from '../../../../contexts/pages/management/payment-forms/payment-forms-context';
import PaymentFormsContextType from '../../../../contexts/pages/management/payment-forms/payment-forms-context-type';

const FormPaymentFormsTable = () => {
  const { paymentForms, remove } = useContext<PaymentFormsContextType>(PaymentFormsContext);
  return (
    <FieldsetCard legend="Formas de pagamento cadastrados" obrigatoryFields={false}>
      <FormTable id="table-paymentForms">
        <thead>
          <tr>
            <th className="hidden">ID</th>
            <th style={{ width: '40%' }}>DESCRIÇÃO</th>
            <th style={{ width: '20%' }}>VÍNCULO</th>
            <th style={{ width: '20%' }}>PRAZO</th>
            <th style={{ width: '2%' }}>&nbsp;</th>
            <th style={{ width: '2%' }}>&nbsp;</th>
          </tr>
        </thead>

        <tbody id="tbody-paymentForms">
          {paymentForms.map((paymentForm) => (
            <tr key={paymentForm.id}>
              <td>{paymentForm.id}</td>
              <td>{paymentForm.description}</td>
              <td>{paymentForm.link == 1 ? 'Conta a pagar' : 'Conta a receber'}</td>
              <td>{paymentForm.deadline}</td>
              <td>
                <a
                  role="button"
                  className="glyphicon glyphicon-edit"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="ALTERAR"
                  href={`/representacoes/gerenciar/formapagamento/editar/${paymentForm.id}`}
                ></a>
              </td>
              <td>
                <a
                  role="button"
                  className="glyphicon glyphicon-trash"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="EXCLUIR"
                  href="#"
                  onClick={async () => await remove(paymentForm.id)}
                ></a>
              </td>
            </tr>
          ))}
        </tbody>
      </FormTable>
    </FieldsetCard>
  );
};

export default FormPaymentFormsTable;
