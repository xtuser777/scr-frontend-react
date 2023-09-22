import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormTable from '../../../shared/form-table';
import { formatarData } from '../../../../utils/format';
import DriversContextType from '../../../../contexts/pages/management/drivers/drivers-context-type';
import { DriversContext } from '../../../../contexts/pages/management/drivers/drivers-context';
import Person from '../../../../models/person';
import Contact from '../../../../models/contact';

const FormDriversTable = () => {
  const { drivers, remove } = useContext<DriversContextType>(DriversContext);
  return (
    <FieldsetCard legend="Motoristas cadastrados" obrigatoryFields={false}>
      <FormTable id="table-drivers">
        <thead>
          <tr>
            <th className="hidden">ID</th>
            <th style={{ width: '40%' }}>NOME</th>
            <th style={{ width: '16%' }}>CPF</th>
            <th style={{ width: '10%' }}>CADASTRO</th>
            <th>EMAIL</th>
            <th style={{ width: '2%' }}>&nbsp;</th>
            <th style={{ width: '2%' }}>&nbsp;</th>
          </tr>
        </thead>

        <tbody id="tbody-drivers">
          {drivers.map((driver) => (
            <tr key={driver.id}>
              <td>{driver.id}</td>
              <td>{(driver.person as Person).individual?.name}</td>
              <td>{(driver.person as Person).individual?.cpf}</td>
              <td>{formatarData(driver.register)}</td>
              <td>{((driver.person as Person).contact as Contact).email}</td>
              <td>
                <a
                  role="button"
                  className="glyphicon glyphicon-edit"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="ALTERAR"
                  href={`/representacoes/gerenciar/motorista/editar/${driver.id}`}
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
                  onClick={async () => await remove(driver.id)}
                ></a>
              </td>
            </tr>
          ))}
        </tbody>
      </FormTable>
    </FieldsetCard>
  );
};

export default FormDriversTable;
