import React, { createContext, useState, ChangeEvent, useContext } from 'react';
import { FormContactContext } from '../../../components/shared/form-contact/contact-context';
import FormContactContextType from '../../../components/shared/form-contact/contact-context-type';
import { FormEnterprisePersonContext } from '../../../components/shared/form-enterprise-person/enterprise-person-context';
import FormEnterprisePersonContextType from '../../../components/shared/form-enterprise-person/enterprise-person-context-type';
import { FormIndividualPersonContext } from '../../../components/shared/form-individual-person/individual-person-context';
import FormIndividualPersonContextType from '../../../components/shared/form-individual-person/individual-person-context-type';
import DriverContextType from './driver-context-type';

export const DriverContext = createContext<DriverContextType>({
  clearFields: () => {
    /** */
  },
  persistData: async () => {
    /** */
  },
});

const DriverProvider = (props: any) => {
  const individualPersonContext = useContext<FormIndividualPersonContextType>(
    FormIndividualPersonContext,
  );
  const contactContext = useContext<FormContactContextType>(FormContactContext);

  const clearFields = () => {
    individualPersonContext.clearFields();
    contactContext.clearFields();
  };
  const persistData = async () => {
    individualPersonContext.validateFields();
    contactContext.validateFields();
  };

  return (
    <DriverContext.Provider value={{ clearFields, persistData }}>
      {props.children}
    </DriverContext.Provider>
  );
};

export default DriverProvider;
