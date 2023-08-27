import React, { useContext } from 'react';
import FieldsetCard from '../../shared/fieldset-card';
import FormTable from '../../shared/form-table';
import { HomeContext } from '../../../contexts/home/home-context';
import { HomeContextType } from '../../../contexts/home-context-type';
import { formatarData } from '../../../utils/format';

const FormHomeTable = () => {
  const { data, events } = useContext<HomeContextType>(HomeContext);

  return (
    <FieldsetCard legend="Eventos do Sistema">
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
