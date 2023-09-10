import React, { createContext, useState, ChangeEvent, useContext } from 'react';
import { FormContactContext } from '../../../components/shared/form-contact/contact-context';
import FormContactContextType from '../../../components/shared/form-contact/contact-context-type';
import { FormEnterprisePersonContext } from '../../../components/shared/form-enterprise-person/enterprise-person-context';
import FormEnterprisePersonContextType from '../../../components/shared/form-enterprise-person/enterprise-person-context-type';
import { FormIndividualPersonContext } from '../../../components/shared/form-individual-person/individual-person-context';
import FormIndividualPersonContextType from '../../../components/shared/form-individual-person/individual-person-context-type';
import ProprietaryContextType from './proprietary-context-type';

export const ProprietaryContext = createContext<ProprietaryContextType>({
  driver: '0',
  type: '1',
  handleDriverChange: (e: ChangeEvent<HTMLSelectElement>) => {
    /** */
  },
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

const ProprietaryProvider = (props: any) => {
  const individualPersonContext = useContext<FormIndividualPersonContextType>(
    FormIndividualPersonContext,
  );
  const enterprisePersonContext = useContext<FormEnterprisePersonContextType>(
    FormEnterprisePersonContext,
  );
  const contactContext = useContext<FormContactContextType>(FormContactContext);

  const [driver, setDriver] = useState('0');
  const [type, setType] = useState('1');

  const handleDriverChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDriver(e.target.value);
  };
  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  const clearFields = () => {
    setDriver('0');
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
    <ProprietaryContext.Provider
      value={{
        driver,
        type,
        handleDriverChange,
        handleTypeChange,
        clearFields,
        persistData,
      }}
    >
      {props.children}
    </ProprietaryContext.Provider>
  );
};

export default ProprietaryProvider;
