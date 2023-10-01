import React from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormTable from '../../../shared/form-table';
import { formatarValor } from '../../../../utils/format';

const FormProductsTable = () => {
  return (
    <FieldsetCard legend="Produtos Cadastrados" obrigatoryFields={false}>
      <FormTable id="table-products">
        <thead>
          <tr>
            <th hidden>ID</th>
            <th style={{ width: '30%' }}>DESCRIÇÃO</th>
            <th style={{ width: '16%' }}>MEDIDA</th>
            <th style={{ width: '10%' }}>PREÇO</th>
            <th style={{ width: '20%' }}>REPRESENTAÇÂO</th>
            <th style={{ width: '2%' }}>&nbsp;</th>
            <th style={{ width: '2%' }}>&nbsp;</th>
          </tr>
        </thead>

        <tbody id="tbodyProducts">
          {/* {products.map((item) => (
            <tr key={item.id}>
              <td hidden>{item.id}</td>
              <td>{item.description}</td>
              <td>{item.measure}</td>
              <td>{formatarValor(item.price)}</td>
              <td>{item.representation.person.enterprise?.fantasyName}</td>
              <td>
                <FaEdit
                  role="button"
                  color="blue"
                  size={14}
                  title="Editar"
                  onClick={() => {
                    history.push(`/produto/editar/${item.id}`);
                    window.location.reload();
                  }}
                />
              </td>
              <td>
                <FaTrash
                  role="button"
                  color="red"
                  size={14}
                  title="Excluir"
                  onClick={async () => await this.remove(item.id)}
                />
              </td>
            </tr>
          ))} */}
        </tbody>
      </FormTable>
    </FieldsetCard>
  );
};

export default FormProductsTable;
