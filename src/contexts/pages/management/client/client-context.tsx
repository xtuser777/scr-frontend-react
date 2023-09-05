import React, { createContext, useState, ChangeEvent, useContext } from 'react';
import { FormContactContext } from '../../../components/shared/form-contact/contact-context';
import FormContactContextType from '../../../components/shared/form-contact/contact-context-type';
import { FormEnterprisePersonContext } from '../../../components/shared/form-enterprise-person/enterprise-person-context';
import FormEnterprisePersonContextType from '../../../components/shared/form-enterprise-person/enterprise-person-context-type';
import { FormIndividualPersonContext } from '../../../components/shared/form-individual-person/individual-person-context';
import FormIndividualPersonContextType from '../../../components/shared/form-individual-person/individual-person-context-type';
import ClientContextType from './client-context-type';

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

  const [type, setType] = useState('1');

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
    individualPersonContext.validateFields();
    enterprisePersonContext.validateFields();
    contactContext.validateFields();
  };

  return (
    <ClientContext.Provider value={{ type, handleTypeChange, clearFields, persistData }}>
      {props.children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
