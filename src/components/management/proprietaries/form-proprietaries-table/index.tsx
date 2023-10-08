import React, { useContext } from 'react';
import FieldsetCard from '../../../shared/fieldset-card';
import FormTable from '../../../shared/form-table';
import { formatarData } from '../../../../utils/format';
import ProprietariesContextType from '../../../../contexts/pages/management/proprietaries/proprietaries-context-type';
import { ProprietariesContext } from '../../../../contexts/pages/management/proprietaries/proprietaries-context';
import Person from '../../../../models/person';
import Contact from '../../../../models/contact';

const FormProprietariesTable = () => {
  const { proprietaries, remove } = useContext<ProprietariesContextType>(ProprietariesContext);
  return (
    <FieldsetCard legend="Proprietários cadastrados" obrigatoryFields={false}>
      <FormTable id="table-proprietaries">
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

        <tbody id="tbody-proprietaries">
          {proprietaries.map((prop) => (
            <tr key={prop.id}>
              <td className="hidden">{prop.id}</td>
              <td>
                {(prop.person as Person).type == 1
                  ? (prop.person as Person).individual?.name
                  : (prop.person as Person).enterprise?.fantasyName}
              </td>
              <td>
                {(prop.person as Person).type == 1
                  ? (prop.person as Person).individual?.cpf
                  : (prop.person as Person).enterprise?.cnpj}
              </td>
              <td>{formatarData(prop.register)}</td>
              <td>{((prop.person as Person).contact as Contact).email}</td>
              <td>
                <a
                  role="button"
                  className="glyphicon glyphicon-edit"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="ALTERAR"
                  href={`/scr/gerenciar/propritario/editar/${prop.id}`}
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
                  onClick={async () => await remove(prop.id)}
                ></a>
              </td>
            </tr>
          ))}
        </tbody>
      </FormTable>
    </FieldsetCard>
  );
};

export default FormProprietariesTable;
