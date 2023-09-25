import React, { useContext } from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormIndividualPerson from '../../../components/shared/form-individual-person';
import FormContact from '../../../components/shared/form-contact';
import FormFooterButtons from '../../../components/shared/form-footer-buttons';
import FormAuthData from '../../../components/shared/form-auth-data';
import FormEmployeeData from '../../../components/management/employee/form-employee-data';
import EmployeeContextType from '../../../contexts/pages/management/employee/employee-context-type';
import { EmployeeContext } from '../../../contexts/pages/management/employee/employee-context';

const EmployeePage = () => {
  const { type, clearFields, persistData } = useContext<EmployeeContextType>(EmployeeContext);
  return (
    <div>
      <CardTitle title="Cadastrar novo funcionário" />
      <FormIndividualPerson />
      <FormEmployeeData />
      <FormContact />
      {type == '1' ? <FormAuthData type={1} /> : <></>}
      <FormFooterButtons
        link="/scr/gerenciar/funcionarios/"
        clear
        save
        clearFields={clearFields}
        persistData={persistData}
      />
    </div>
  );
};

export default EmployeePage;
