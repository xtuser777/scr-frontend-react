import React, { useContext } from 'react';
import CardTitle from '../../components/shared/card-title';
import FormIndividualPerson from '../../components/shared/form-individual-person';
import UserContextType from '../../contexts/pages/user/user-context-type';
import { UserContext } from '../../contexts/pages/user/user-context';
import FormContact from '../../components/shared/form-contact';
import FormAuthData from '../../components/shared/form-auth-data';
import FormFooterButtons from '../../components/shared/form-footer-buttons';

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
