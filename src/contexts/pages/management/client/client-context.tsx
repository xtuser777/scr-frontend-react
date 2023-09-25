import React, { createContext, useState, ChangeEvent, useContext, useEffect } from 'react';
import { FormContactContext } from '../../../components/shared/form-contact/contact-context';
import FormContactContextType from '../../../components/shared/form-contact/contact-context-type';
import { FormEnterprisePersonContext } from '../../../components/shared/form-enterprise-person/enterprise-person-context';
import FormEnterprisePersonContextType from '../../../components/shared/form-enterprise-person/enterprise-person-context-type';
import { FormIndividualPersonContext } from '../../../components/shared/form-individual-person/individual-person-context';
import FormIndividualPersonContextType from '../../../components/shared/form-individual-person/individual-person-context-type';
import ClientContextType from './client-context-type';
import Client from '../../../../models/client';
import ClientService from '../../../../services/client-service';
import { useParams } from 'react-router-dom';
import Person from '../../../../models/person';
import IndividualPerson from '../../../../models/individual-person';
import EnterprisePerson from '../../../../models/enterprise-person';
import Contact from '../../../../models/contact';

export const ClientContext = createContext<ClientContextType>({
  type: '1',
  handleTypeChange: (e: ChangeEvent<HTMLSelectElement>) => {
    /** */
  },
  clearFields: () => {
    /** */
  },
  persistData: async () => {
    /** */
  },
});

const ClientProvider = (props: any) => {
  const individualPersonContext = useContext<FormIndividualPersonContextType>(
    FormIndividualPersonContext,
  );
  const enterprisePersonContext = useContext<FormEnterprisePersonContextType>(
    FormEnterprisePersonContext,
  );
  const contactContext = useContext<FormContactContextType>(FormContactContext);

  const [client, setClient] = useState(new Client());

  const [type, setType] = useState('1');

  const routeParams = useParams();
  const method = routeParams.method as string;
  let id = 0;
  if (routeParams.id) id = Number.parseInt(routeParams.id);

  const getData = async () => {
    const service = new ClientService();
    const data = await service.getOne(id);

    if (data) {
      setClient(data);
      setType((data.person as Person).type.toString());
      if ((data.person as Person).type == 1)
        individualPersonContext.loadPerson(
          (data.person as Person).individual as IndividualPerson,
          true,
        );
      else
        enterprisePersonContext.loadPerson((data.person as Person).enterprise as EnterprisePerson);
      await contactContext.loadContact((data.person as Person).contact as Contact);
    }
  };

  useEffect(() => {
    if (method == 'editar' && id) getData();
  }, []);

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  const clearFields = () => {
    setType('1');
    individualPersonContext.clearFields();
    enterprisePersonContext.clearFields();
    contactContext.clearFields();
  };
  const persistData = async () => {
    let valid = true;
    valid = await individualPersonContext.validateFields();
    valid = enterprisePersonContext.validateFields();
    valid = contactContext.validateFields();

    if (valid) {
      client.register = new Date().toISOString().substring(0, 10);
      if (type == '1') (client.person as Person).individual = individualPersonContext.person;
      else (client.person as Person).enterprise = enterprisePersonContext.person;
      (client.person as Person).contact = contactContext.contact;

      const service = new ClientService();
      if (method == 'novo') await service.save(client);
      else await service.update(client);
    }
  };

  return (
    <ClientContext.Provider value={{ type, handleTypeChange, clearFields, persistData }}>
      {props.children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
