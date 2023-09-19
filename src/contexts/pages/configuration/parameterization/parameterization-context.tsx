import { createContext, useContext, useEffect } from 'react';
import ParameterizationContextType from './parameterization-context-type';
import FormEnterprisePersonContextType from '../../../components/shared/form-enterprise-person/enterprise-person-context-type';
import { FormEnterprisePersonContext } from '../../../components/shared/form-enterprise-person/enterprise-person-context';
import FormContactContextType from '../../../components/shared/form-contact/contact-context-type';
import { FormContactContext } from '../../../components/shared/form-contact/contact-context';

export const ParameterizationContext = createContext<ParameterizationContextType>({
  persistData: async () => {
    /** */
  },
});

const ParameterizationProvider = (props: any) => {
  const enterprisePersonContext = useContext<FormEnterprisePersonContextType>(
    FormEnterprisePersonContext,
  );
  const contactContext = useContext<FormContactContextType>(FormContactContext);

  //useEffect(() => {}, []);

  const persistData = async () => {
    enterprisePersonContext.validateFields();
    contactContext.validateFields();
  };

  return (
    <ParameterizationContext.Provider
      value={{
        persistData,
      }}
    >
      {props.children}
    </ParameterizationContext.Provider>
  );
};

export default ParameterizationProvider;
