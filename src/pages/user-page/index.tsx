import React, { useContext } from 'react';
import CardTitle from '../../components/shared/card-title';
import FormIndividualPerson from '../../components/shared/form-individual-person';
import UserContextType from '../../contexts/pages/user/user-context-type';
import { UserContext } from '../../contexts/pages/user/user-context';
import FormContact from '../../components/shared/form-contact';

const UserPage = () => {
  // const { individualPersonContext } = useContext<UserContextType>(UserContext);

  return (
    <div>
      <CardTitle title="Dados do Funcionário" />

      <FormIndividualPerson />

      <FormContact />
    </div>
  );
};

export default UserPage;
