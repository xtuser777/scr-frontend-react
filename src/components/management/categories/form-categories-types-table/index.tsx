import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormTable from '../../../shared/form-table';
import { CategoriesContext } from '../../../../contexts/pages/management/categories/categories-context';
import CategoriesContextType from '../../../../contexts/pages/management/categories/categories-context-type';

const FormCategoriesTable = () => {
  const { categories, remove } = useContext<CategoriesContextType>(CategoriesContext);
  return (
    <FieldsetCard legend="Categorias cadastradas" obrigatoryFields={false}>
      <FormTable id="table-categories">
        <thead>
          <tr>
            <th className="hidden">ID</th>
            <th>DESCRIÇÃO</th>
            <th style={{ width: '2%' }}>&nbsp;</th>
            <th style={{ width: '2%' }}>&nbsp;</th>
          </tr>
        </thead>

        <tbody id="tbody-categories">
          {categories.map((truckType) => (
            <tr key={truckType.id}>
              <td>{truckType.id}</td>
              <td>{truckType.description}</td>
              <td>
                <a
                  role="button"
                  className="glyphicon glyphicon-edit"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="ALTERAR"
                  href={`/representacoes/gerenciar/categoria/editar/${truckType.id}`}
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
                  onClick={async () => await remove(truckType.id)}
                ></a>
              </td>
            </tr>
          ))}
        </tbody>
      </FormTable>
    </FieldsetCard>
  );
};

export default FormCategoriesTable;
