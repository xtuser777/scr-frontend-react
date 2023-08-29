import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormTable from '../../../shared/form-table';
import EmployeesContextType from '../../../../contexts/pages/management/employees/employees-context-type';
import { EmployeesContext } from '../../../../contexts/pages/management/employees/employees-context';
import { formatarData } from '../../../../utils/format';

const FormEmployeesTable = () => {
  const { employees, desactivate, reactivate, remove } =
    useContext<EmployeesContextType>(EmployeesContext);
  return (
    <FieldsetCard legend="Funcionários cadastrados" obrigatoryFields={false}>
      <FormTable id="table-employees">
        <thead>
          <tr>
            <th className="hidden">ID</th>
            <th style={{ width: '20%' }}>NOME</th>
            <th style={{ width: '10%' }}>USUÁRIO</th>
            <th style={{ width: '12%' }}>NÍVEL</th>
            <th style={{ width: '12%' }}>CPF</th>
            <th style={{ width: '8%' }}>ADMISSÃO</th>
            <th style={{ width: '10%' }}>TIPO</th>
            <th style={{ width: '8%' }}>ATIVO</th>
            <th>EMAIL</th>
            <th style={{ width: '2%' }}>&nbsp;</th>
            <th style={{ width: '2%' }}>&nbsp;</th>
            <th style={{ width: '2%' }}>&nbsp;</th>
          </tr>
        </thead>

        <tbody id="tbody-employees">
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.person.individual?.name}</td>
              <td>{employee.login}</td>
              <td>{employee.level.description}</td>
              <td>{employee.person.individual?.cpf}</td>
              <td>{formatarData(employee.admission)}</td>
              <td>{employee.type == 1 ? 'INTERNO' : 'VENDEDOR'}</td>
              <td>{employee.demission ? 'NÃO' : 'SIM'}</td>
              <td>{employee.person.contact.email}</td>
              <td>
                <a
                  role="button"
                  className="glyphicon glyphicon-off"
                  data-toggle="tooltip"
                  data-placement="top"
                  title={employee.demission == undefined ? 'DESATIVAR' : 'REATIVAR'}
                  href="#"
                  onClick={async () =>
                    employee.demission == undefined
                      ? await desactivate(employee.id)
                      : await reactivate(employee.id)
                  }
                ></a>
              </td>
              <td>
                <a
                  role="button"
                  className="glyphicon glyphicon-edit"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="ALTERAR"
                  href={`/representacoes/gerenciar/funcionario/editar/${employee.id}`}
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
                  onClick={async () => remove(employee.id)}
                ></a>
              </td>
            </tr>
          ))}
        </tbody>
      </FormTable>
    </FieldsetCard>
  );
};

export default FormEmployeesTable;
