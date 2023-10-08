import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormTable from '../../../shared/form-table';
import { TrucksContext } from '../../../../contexts/pages/management/trucks/trucks-context';
import TrucksContextType from '../../../../contexts/pages/management/trucks/trucks-context-type';

const FormTrucksTable = () => {
  const { trucks, remove } = useContext<TrucksContextType>(TrucksContext);
  return (
    <FieldsetCard legend="Caminhões cadastrados" obrigatoryFields={false}>
      <FormTable id="table-trucks">
        <thead>
          <tr>
            <th className="hidden">ID</th>
            <th style={{ width: '10%' }}>PLACA</th>
            <th style={{ width: '20%' }}>MARCA</th>
            <th style={{ width: '40%' }}>MODELO</th>
            <th style={{ width: '20%' }}>COR</th>
            <th style={{ width: '8%' }}>ANO</th>
            <th style={{ width: '2%' }}>&nbsp;</th>
            <th style={{ width: '2%' }}>&nbsp;</th>
          </tr>
        </thead>

        <tbody id="tbody-trucks">
          {trucks.map((truck) => (
            <tr key={truck.id}>
              <td className="hidden">{truck.id}</td>
              <td>{truck.plate}</td>
              <td>{truck.brand}</td>
              <td>{truck.model}</td>
              <td>{truck.color}</td>
              <td>{truck.modelYear}</td>
              <td>
                <a
                  role="button"
                  className="glyphicon glyphicon-edit"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="ALTERAR"
                  href={`/scr/gerenciar/caminhao/editar/${truck.id}`}
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
                  onClick={async () => await remove(truck.id)}
                ></a>
              </td>
            </tr>
          ))}
        </tbody>
      </FormTable>
    </FieldsetCard>
  );
};

export default FormTrucksTable;
