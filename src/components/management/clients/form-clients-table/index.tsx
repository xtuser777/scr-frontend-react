import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormTable from '../../../shared/form-table';
import { formatarData } from '../../../../utils/format';
import { ClientsContext } from '../../../../contexts/pages/management/clients/clients-context';
import ClientsContextType from '../../../../contexts/pages/management/clients/clients-context-type';

const FormClientsTable = () => {
  const { clients, remove } = useContext<ClientsContextType>(ClientsContext);
  return (
    <FieldsetCard legend="Clientes cadastrados" obrigatoryFields={false}>
      <FormTable id="table-employees">
        <thead>
          <tr>
            <th className="hidden">ID</th>
            <th style={{ width: '40%' }}>NOME/NOME FANTASIA</th>
            <th style={{ width: '16%' }}>CPF/CNPJ</th>
            <th style={{ width: '10%' }}>CADASTRO</th>
            <th style={{ width: '10%' }}>TIPO</th>
            <th>EMAIL</th>
            <th style={{ width: '2%' }}>&nbsp;</th>
            <th style={{ width: '2%' }}>&nbsp;</th>
          </tr>
        </thead>

        <tbody id="tbody-employees">
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.person.individual?.name}</td>
              <td>{client.person.individual?.cpf}</td>
              <td>{formatarData(client.register)}</td>
              <td>{client.person.type == 1 ? 'FISICA' : 'JURIDICA'}</td>
              <td>{client.person.contact.email}</td>
              <td>
                <a
                  role="button"
                  className="glyphicon glyphicon-edit"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="ALTERAR"
                  href={`/representacoes/gerenciar/client/editar/${client.id}`}
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
                  onClick={async () => await remove(client.id)}
                ></a>
              </td>
            </tr>
          ))}
        </tbody>
      </FormTable>
    </FieldsetCard>
  );
};

export default FormClientsTable;
