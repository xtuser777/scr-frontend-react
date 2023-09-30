import React, { createContext, useState, ChangeEvent, useContext, useEffect } from 'react';
import { FormContactContext } from '../../../components/shared/form-contact/contact-context';
import FormContactContextType from '../../../components/shared/form-contact/contact-context-type';
import { FormEnterprisePersonContext } from '../../../components/shared/form-enterprise-person/enterprise-person-context';
import FormEnterprisePersonContextType from '../../../components/shared/form-enterprise-person/enterprise-person-context-type';
import { FormIndividualPersonContext } from '../../../components/shared/form-individual-person/individual-person-context';
import FormIndividualPersonContextType from '../../../components/shared/form-individual-person/individual-person-context-type';
import ProprietaryContextType from './proprietary-context-type';
import { useParams } from 'react-router-dom';
import ProprietaryService from '../../../../services/proprietary-service';
import Proprietary from '../../../../models/proprietary';
import Person from '../../../../models/person';
import IndividualPerson from '../../../../models/individual-person';
import EnterprisePerson from '../../../../models/enterprise-person';
import Contact from '../../../../models/contact';
import Driver from '../../../../models/driver';
import DriverService from '../../../../services/driver-service';

export const ProprietaryContext = createContext<ProprietaryContextType>({
  drivers: [],
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

  const [proprietary, setProprietary] = useState(new Proprietary());

  const [drivers, setDrivers] = useState<Driver[]>([]);

  const [driver, setDriver] = useState('0');
  const [type, setType] = useState('1');

  const routeParams = useParams();
  const method = routeParams.method as string;
  let id = 0;
  if (routeParams.id) id = Number.parseInt(routeParams.id);

  const getDrivers = async () => {
    const service = new DriverService();
    const drivers = await service.get();
    setDrivers(drivers);
  };

  const getData = async () => {
    const service = new ProprietaryService();
    const data = await service.getOne(id);

    if (data) {
      setProprietary(data);
      if ((data.person as Person).type == 1) individualPersonContext.loadPerson(((data.person as Person).individual as IndividualPerson), false);
      else enterprisePersonContext.loadPerson(((data.person as Person).enterprise as EnterprisePerson));
      setDriver((data.driver as Driver).id.toString());
      setType((data.person as Person).type.toString());
      await contactContext.loadContact((data.person as Person).contact as Contact);
    }
  };

  useEffect(() => {
    getDrivers();
    if (method == 'editar' && id) getData();
  }, []);

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
    const v1 = await individualPersonContext.validateFields();
    const v2 = enterprisePersonContext.validateFields();
    const v3 = contactContext.validateFields();

    if (v1 && v2 && v3) {
      proprietary.driver = drivers.find(d => d.id == Number(driver));
      (proprietary.person as Person).type = Number(type);
      (proprietary.person as Person).individual = individualPersonContext.person;
      (proprietary.person as Person).enterprise = enterprisePersonContext.person;
      (proprietary.person as Person).contact = contactContext.contact;

      const service = new ProprietaryService();
      if (method == 'novo') {
        proprietary.register = new Date().toISOString().substring(0, 10);
        await service.save(proprietary);
      } else await service.update(proprietary);
    }
  };

  return (
    <ProprietaryContext.Provider
      value={{
        drivers,
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
