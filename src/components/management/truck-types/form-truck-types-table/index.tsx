import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormTable from '../../../shared/form-table';
import { TruckTypesContext } from '../../../../contexts/pages/management/truck-types/truck-types-context';
import TruckTypesContextType from '../../../../contexts/pages/management/truck-types/truck-types-context-type';

const FormTruckTypesTable = () => {
  const { truckTypes, remove } = useContext<TruckTypesContextType>(TruckTypesContext);
  return (
    <FieldsetCard legend="Caminhões cadastrados" obrigatoryFields={false}>
      <FormTable id="table-truckTypes">
        <thead>
          <tr>
            <th className="hidden">ID</th>
            <th style={{ width: '40%' }}>DESCRIÇÃO</th>
            <th style={{ width: '16%' }}>EIXOS</th>
            <th style={{ width: '10%' }}>CAPACIDADE</th>
            <th style={{ width: '2%' }}>&nbsp;</th>
            <th style={{ width: '2%' }}>&nbsp;</th>
          </tr>
        </thead>

        <tbody id="tbody-truckTypes">
          {truckTypes.map((truckType) => (
            <tr key={truckType.id}>
              <td>{truckType.id}</td>
              <td>{truckType.description}</td>
              <td>{truckType.axes}</td>
              <td>{truckType.capacity}</td>
              <td>
                <a
                  role="button"
                  className="glyphicon glyphicon-edit"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="ALTERAR"
                  href={`/representacoes/gerenciar/tipocaminhao/editar/${truckType.id}`}
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

export default FormTruckTypesTable;
