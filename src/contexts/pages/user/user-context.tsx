import { createContext, useContext, useEffect, useState } from 'react';
import UserContextType from './user-context-type';
import { FormIndividualPersonContext as IndividualPersonContext } from '../../components/shared/form-individual-person/individual-person-context';
import FormIndividualPersonContextType from '../../components/shared/form-individual-person/individual-person-context-type';
import FormContactContextType from '../../components/shared/form-contact/contact-context-type';
import { FormContactContext } from '../../components/shared/form-contact/contact-context';
import FormAuthDataContextType from '../../components/shared/form-auth-data/auth-data-context-type';
import { FormAuthDataContext } from '../../components/shared/form-auth-data/auth-data-context';
import EmployeeService from '../../../services/employee-service';
import { Security, UserToken } from '../../../utils/security';
import Person from '../../../models/person';
import IndividualPerson from '../../../models/individual-person';
import Contact from '../../../models/contact';
import Employee from '../../../models/employee';

export const UserContext = createContext<UserContextType>({
  persistData: async () => {
    /** */
  },
});

const UserProvider = (props: any) => {
  const individualPersonContext =
    useContext<FormIndividualPersonContextType>(IndividualPersonContext);
  const contactContext = useContext<FormContactContextType>(FormContactContext);
  const authContext = useContext<FormAuthDataContextType>(FormAuthDataContext);

  const userToken: UserToken = Security.getUser();

  const [data, setData] = useState<Employee | undefined>(new Employee());

  const getData = async () => {
    const service = new EmployeeService();
    const data = await service.getOne(userToken.user.id);
    setData(data);

    if (data) {
      individualPersonContext.loadPerson(
        (data.person as Person).individual as IndividualPerson,
        false,
      );
      contactContext.loadContact((data.person as Person).contact as Contact);
      authContext.loadData(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const persistData = async () => {
    let valid = true;
    if (await authContext.validateFields()) {
      setData(authContext.data);
    } else valid = false;
    if (await individualPersonContext.validateFields()) {
      ((data as Employee).person as Person).individual = individualPersonContext.person;
    } else valid = false;
    if (contactContext.validateFields()) {
      ((data as Employee).person as Person).contact = contactContext.contact;
    } else valid = false;

    if (valid) {
      const service = new EmployeeService();
      await service.update(data as Employee);
    }
  };

  return <UserContext.Provider value={{ persistData }}>{props.children}</UserContext.Provider>;
};

export default UserProvider;
