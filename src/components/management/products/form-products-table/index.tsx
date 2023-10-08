import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormTable from '../../../shared/form-table';
import { formatarValor } from '../../../../utils/format';
import ProductsContextType from '../../../../contexts/pages/management/pruducts/products-context-type';
import { ProductsContext } from '../../../../contexts/pages/management/pruducts/products-context';
import Representation from '../../../../models/representation';
import Person from '../../../../models/person';

const FormProductsTable = () => {
  const { products, remove } = useContext<ProductsContextType>(ProductsContext);
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
          {products.map((item) => (
            <tr key={item.id}>
              <td hidden>{item.id}</td>
              <td>{item.description}</td>
              <td>{item.measure}</td>
              <td>{formatarValor(item.price)}</td>
              <td>
                {((item.representation as Representation).person as Person).enterprise?.fantasyName}
              </td>
              <td>
                <a
                  role="button"
                  className="glyphicon glyphicon-edit"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Editar"
                  href={`/scr/gerenciar/produto/editar/${item.id}`}
                ></a>
              </td>
              <td>
                <a
                  role="button"
                  className="glyphicon glyphicon-trash"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Excluir"
                  onClick={async () => await remove(item.id)}
                ></a>
              </td>
            </tr>
          ))}
        </tbody>
      </FormTable>
    </FieldsetCard>
  );
};

export default FormProductsTable;
