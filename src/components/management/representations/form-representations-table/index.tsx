import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormTable from '../../../shared/form-table';
import { formatarData } from '../../../../utils/format';
import { RepresentationsContext } from '../../../../contexts/pages/management/representations/representations-context';
import RepresentationsContextType from '../../../../contexts/pages/management/representations/representations-context-type';

const FormRepresentationsTable = () => {
  const { representations, remove } =
    useContext<RepresentationsContextType>(RepresentationsContext);
  return (
    <FieldsetCard legend="Representações cadastradas" obrigatoryFields={false}>
      <FormTable id="table-representations">
        <thead>
          <tr>
            <th className="hidden">ID</th>
            <th style={{ width: '30%' }}>NOME FANTASIA</th>
            <th style={{ width: '16%' }}>CNPJ</th>
            <th style={{ width: '10%' }}>CADASTRO</th>
            <th style={{ width: '20%' }}>UNIDADE</th>
            <th>EMAIL</th>
            <th style={{ width: '2%' }}></th>
            <th style={{ width: '2%' }}>&nbsp;</th>
            <th style={{ width: '2%' }}>&nbsp;</th>
          </tr>
        </thead>

        <tbody id="tbody-representations">
          {representations.map((representation) => (
            <tr key={representation.id}>
              <td>{representation.person.enterprise?.fantasyName}</td>
              <td>{representation.person.enterprise?.cnpj}</td>
              <td>{formatarData(representation.register)}</td>
              <td>{representation.unity}</td>
              <td>{representation.person.contact.email}</td>
              <td>
                <a
                  role="button"
                  className="glyphicon glyphicon-add"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="ALTERAR"
                  href={`/representacoes/gerenciar/representacao/unidade/${representation.id}`}
                ></a>
              </td>
              <td>
                <a
                  role="button"
                  className="glyphicon glyphicon-edit"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="ALTERAR"
                  href={`/representacoes/gerenciar/representacao/editar/${representation.id}`}
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
                  onClick={async () => await remove(representation.id)}
                ></a>
              </td>
            </tr>
          ))}
        </tbody>
      </FormTable>
    </FieldsetCard>
  );
};

export default FormRepresentationsTable;
