import React, { useContext } from 'react';
import UserContextType from '../../../contexts/pages/user/user-context-type';
import CardTitle from '../../../components/shared/card-title';
import FormAuthData from '../../../components/shared/form-auth-data';
import FormContact from '../../../components/shared/form-contact';
import FormFooterButtons from '../../../components/shared/form-footer-buttons';
import FormIndividualPerson from '../../../components/shared/form-individual-person';
import { UserContext } from '../../../contexts/pages/user/user-context';

const UserPage = () => {
  const { persistData } = useContext<UserContextType>(UserContext);

  return (
    <div>
      <CardTitle title="Dados do Funcionário" />
      <FormIndividualPerson />
      <FormContact />
      <FormAuthData />
      <FormFooterButtons link="/" clear={false} save persistData={persistData} />
    </div>
  );
};

export default UserPage;
