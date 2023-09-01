import React, { useContext } from 'react';
import FieldsetCard from '../../shared/fieldset-card';
import FormTable from '../../shared/form-table';
import { HomeContext } from '../../../contexts/home/home-context';
import { formatarData } from '../../../utils/format';
import { HomeContextType } from '../../../contexts/home/home-context-type';

const FormHomeTable = () => {
  const { data, events } = useContext<HomeContextType>(HomeContext);

  return (
    <FieldsetCard legend="Eventos do Sistema" obrigatoryFields={false}>
      <FormTable id="table-events">
        <thead>
          <tr>
            <th>DESCRIÇÃO</th>
            <th>DATA</th>
            <th>HORA</th>
            <th>PEDIDO</th>
            <th>ATOR</th>
          </tr>
        </thead>

        <tbody id="tbody-events">
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.description}</td>
              <td>{formatarData(event.date)}</td>
              <td>{event.time}</td>
              <td>
                {event.saleOrder
                  ? event.saleOrder.description
                  : event.freightOrder?.description}
              </td>
              <td>{event.author.person.individual?.name}</td>
            </tr>
          ))}
        </tbody>
      </FormTable>
    </FieldsetCard>
  );
};

export default FormHomeTable;
