import React from 'react';
import CardTitle from '../../../components/shared/card-title';
import FormIndividualPerson from '../../../components/shared/form-individual-person';
import FormContact from '../../../components/shared/form-contact';
import FormFooterButtons from '../../../components/shared/form-footer-buttons';
import FormAuthData from '../../../components/shared/form-auth-data';
import FormEmployeeData from '../../../components/management/employee/form-employee-data';

const EmployeePage = () => {
  return (
    <div>
      <CardTitle title="Cadastrar novo funcionário" />
      <FormIndividualPerson />
      <FormEmployeeData />
      <FormContact />
      <FormAuthData type={1} />
      <FormFooterButtons
        link="/representacoes/gerenciar/funcionarios/"
        clear
        save
        clearFields={() => {
          /** */
        }}
        persistData={async () => {
          /** */
        }}
      />
    </div>
  );
};

export default EmployeePage;
