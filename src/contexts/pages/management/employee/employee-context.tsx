import { ChangeEvent, createContext, useContext, useState } from 'react';
import EmployeeContextType from './employee-context-type';
import { Employee, IEmployee } from '../../../../models/employee';
import FormIndividualPersonContextType from '../../../components/shared/form-individual-person/individual-person-context-type';
import { FormIndividualPersonContext } from '../../../components/shared/form-individual-person/individual-person-context';
import FormContactContextType from '../../../components/shared/form-contact/contact-context-type';
import { FormContactContext } from '../../../components/shared/form-contact/contact-context';
import FormAuthDataContextType from '../../../components/shared/form-auth-data/auth-data-context-type';
import { FormAuthDataContext } from '../../../components/shared/form-auth-data/auth-data-context';

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

  const [employee, setEmployee] = useState<IEmployee>(new Employee());

  const [admission, setAdmission] = useState('');
  const [type, setType] = useState('0');

  const [errorAdmission, setErrorAdmission] = useState<string | undefined>(undefined);
  const [errorType, setErrorType] = useState<string | undefined>(undefined);

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
    individualPersonContext.validateFields();
    validateFields();
    contactContext.validateFields();
    authDataContext.validateFields();
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
