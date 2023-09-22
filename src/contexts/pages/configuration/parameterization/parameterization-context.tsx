import { createContext, useContext, useEffect, useState } from 'react';
import ParameterizationContextType from './parameterization-context-type';
import FormEnterprisePersonContextType from '../../../components/shared/form-enterprise-person/enterprise-person-context-type';
import { FormEnterprisePersonContext } from '../../../components/shared/form-enterprise-person/enterprise-person-context';
import FormContactContextType from '../../../components/shared/form-contact/contact-context-type';
import { FormContactContext } from '../../../components/shared/form-contact/contact-context';
import Parameterization from '../../../../models/parameterization';
import ParameterizationService from '../../../../services/parameterization-service';
import Person from '../../../../models/person';
import EnterprisePerson from '../../../../models/enterprise-person';
import Contact from '../../../../models/contact';

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

  const [data, setData] = useState(new Parameterization);

  const [method, setMethod] = useState(1);

  const getData = async () => {
    const service = new ParameterizationService();
    const data = await service.get();

    if (data) {
      setMethod(2);
      setData(data);
      enterprisePersonContext.loadPerson(((data.person as Person).enterprise as EnterprisePerson));
      contactContext.loadContact(((data.person as Person).contact as Contact));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const persistData = async () => {
    let valid = true;
    if (enterprisePersonContext.validateFields()) {
      (data.person as Person).enterprise = enterprisePersonContext.person;
    } else valid = false;
    if (contactContext.validateFields()) {
      (data.person as Person).contact = contactContext.contact;
    } else valid = false;

    if (valid) {
      const service = new ParameterizationService();
      if (method == 1) await service.save(data);
      else await service.update(data);
    }
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
