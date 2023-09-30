import { createContext, useContext, useEffect, useState } from 'react';
import RepresentationContextType from './representation-context-type';
import FormEnterprisePersonContextType from '../../../components/shared/form-enterprise-person/enterprise-person-context-type';
import { FormEnterprisePersonContext } from '../../../components/shared/form-enterprise-person/enterprise-person-context';
import FormContactContextType from '../../../components/shared/form-contact/contact-context-type';
import { FormContactContext } from '../../../components/shared/form-contact/contact-context';
import RepresentationService from '../../../../services/representation-service';
import Representation from '../../../../models/representation';

export const RepresentationContext = createContext<RepresentationContextType>({
  clearFields: () => {
    /** */
  },
  persistData: async () => {
    /** */
  },
});

const RepresentationProvider = (props: any) => {
  const enterprisePersonContext = useContext<FormEnterprisePersonContextType>(
    FormEnterprisePersonContext,
  );
  const contactContext = useContext<FormContactContextType>(FormContactContext);

  const [represntation, setRepresentation] = useState(new Representation());

  const getData = async () => {
    const service = new RepresentationService();
    const data = await service.getOne();

    if (data) {
      setRepresentation(data);
    }
  };

  useEffect(() => {
  }, []);

  const clearFields = () => {
    enterprisePersonContext.clearFields();
    contactContext.clearFields();
  };

  const persistData = async () => {
    enterprisePersonContext.validateFields();
    contactContext.validateFields();
  };

  return (
    <RepresentationContext.Provider
      value={{
        clearFields,
        persistData,
      }}
    >
      {props.children}
    </RepresentationContext.Provider>
  );
};

export default RepresentationProvider;
