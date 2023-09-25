import { ChangeEvent, createContext, useContext, useEffect, useState } from 'react';
import EmployeeContextType from './employee-context-type';
import Employee from '../../../../models/employee';
import FormIndividualPersonContextType from '../../../components/shared/form-individual-person/individual-person-context-type';
import { FormIndividualPersonContext } from '../../../components/shared/form-individual-person/individual-person-context';
import FormContactContextType from '../../../components/shared/form-contact/contact-context-type';
import { FormContactContext } from '../../../components/shared/form-contact/contact-context';
import FormAuthDataContextType from '../../../components/shared/form-auth-data/auth-data-context-type';
import { FormAuthDataContext } from '../../../components/shared/form-auth-data/auth-data-context';
import { useParams } from 'react-router-dom';
import EmployeeService from '../../../../services/employee-service';
import Person from '../../../../models/person';
import IndividualPerson from '../../../../models/individual-person';
import Contact from '../../../../models/contact';

export const EmployeeContext = createContext<EmployeeContextType>({
  admission: '',
  type: '0',
  handleAdmissionChange: (e: ChangeEvent<HTMLInputElement>) => {
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

const EmployeeProvider = (props: any) => {
  const individualPersonContext = useContext<FormIndividualPersonContextType>(
    FormIndividualPersonContext,
  );
  const contactContext = useContext<FormContactContextType>(FormContactContext);
  const authDataContext = useContext<FormAuthDataContextType>(FormAuthDataContext);

  const [employee, setEmployee] = useState<Employee>(new Employee());

  const [admission, setAdmission] = useState('');
  const [type, setType] = useState('0');

  const [errorAdmission, setErrorAdmission] = useState<string | undefined>(undefined);
  const [errorType, setErrorType] = useState<string | undefined>(undefined);

  const routeParams = useParams();
  const method = routeParams.method as string;
  let id = 0;
  if (routeParams.id) id = Number.parseInt(routeParams.id);

  const getData = async () => {
    const service = new EmployeeService();
    const data = await service.getOne(id);

    if (data) {
      setEmployee(data);
      individualPersonContext.loadPerson(
        (data.person as Person).individual as IndividualPerson,
        true,
      );
      setAdmission(data.admission);
      setType(data.type.toString());
      contactContext.loadContact((data.person as Person).contact as Contact);
      authDataContext.loadData(data);
    }
  };

  useEffect(() => {
    if (method == 'editar' && id) getData();
  }, []);

  const validate = {
    admission: (value: string) => {
      const val = new Date(value);
      const now = new Date(Date.now());
      if (value.length == 0) {
        setErrorAdmission('A data de admissão precisa ser preenchida');
        return false;
      } else if (
        now.getFullYear() == val.getFullYear() &&
        now.getMonth() == val.getMonth() &&
        now.getDate() < val.getDate()
      ) {
        setErrorAdmission('A data de admissão preenchida é inválida');
        return false;
      } else {
        setErrorAdmission(undefined);
        employee.admission = value;
        return true;
      }
    },
    type: (value: string) => {
      if (value == '0') {
        setErrorType('O tipo de funcionário precisa ser selecionado.');
        return false;
      } else {
        setErrorType(undefined);
        employee.type = Number(value);
        return true;
      }
    },
  };

  const handleAdmissionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAdmission(e.target.value);
    validate.admission(e.target.value);
  };

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
    validate.type(e.target.value);
  };

  const clearFields = () => {
    individualPersonContext.clearFields();
    setAdmission('');
    setType('0');
    contactContext.clearFields();
    authDataContext.clearFields();
  };

  const validateFields = () => {
    return validate.admission(admission) && validate.type(type);
  };

  const persistData = async () => {
    let valid = true;
    valid = await individualPersonContext.validateFields();
    valid = validateFields();
    valid = contactContext.validateFields();
    valid = await authDataContext.validateFields();

    if (valid) {
      setEmployee(authDataContext.data);
      (employee.person as Person).individual = individualPersonContext.person;
      (employee.person as Person).contact = contactContext.contact;

      const service = new EmployeeService();
      if (method == 'novo') await service.save(employee);
      else await service.update(employee);
    }
  };

  return (
    <EmployeeContext.Provider
      value={{
        admission,
        type,
        errorAdmission,
        errorType,
        handleAdmissionChange,
        handleTypeChange,
        clearFields,
        persistData,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;
