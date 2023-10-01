import { createContext, useContext, useEffect, useState } from 'react';
import RepresentationContextType from './representation-context-type';
import FormEnterprisePersonContextType from '../../../components/shared/form-enterprise-person/enterprise-person-context-type';
import { FormEnterprisePersonContext } from '../../../components/shared/form-enterprise-person/enterprise-person-context';
import FormContactContextType from '../../../components/shared/form-contact/contact-context-type';
import { FormContactContext } from '../../../components/shared/form-contact/contact-context';
import RepresentationService from '../../../../services/representation-service';
import Representation from '../../../../models/representation';
import { useParams } from 'react-router-dom';
import Person from '../../../../models/person';
import EnterprisePerson from '../../../../models/enterprise-person';
import Contact from '../../../../models/contact';

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

  const routeParams = useParams();
  const method = routeParams.method as string;
  let id = 0;
  if (routeParams.id) id = Number.parseInt(routeParams.id);

  const getData = async () => {
    const service = new RepresentationService();
    const data = await service.getOne(id);

    if (data) {
      setRepresentation(data);
      enterprisePersonContext.loadPerson((data.person as Person).enterprise as EnterprisePerson);
      contactContext.loadContact((data.person as Person).contact as Contact);
    }
  };

  useEffect(() => {
    if (method == 'editar' && id) getData();
  }, []);

  const clearFields = () => {
    enterprisePersonContext.clearFields();
    contactContext.clearFields();
  };

  const persistData = async () => {
    const v1 = enterprisePersonContext.validateFields();
    const v2 = contactContext.validateFields();

    const service = new RepresentationService();
    if (v1 && v2) {
      represntation.unity = contactContext.contact.address?.city?.name + 
      " - " + 
      contactContext.contact.address?.city?.state?.acronym;
      if (method == 'editar') {
        represntation.register = new Date().toISOString().substring(0, 10);
        await service.update(represntation);
      } else await service.save(represntation);
    }
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
