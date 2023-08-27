import { ChangeEvent, createContext, useContext, useEffect } from 'react';
import UserContextType from './user-context-type';
import { FormIndividualPersonContext as IndividualPersonContext } from '../../components/shared/form-individual-person/individual-person-context';
import FormIndividualPersonContextType from '../../components/shared/form-individual-person/individual-person-context-type';
import { IndividualPerson, IIndividualPerson } from '../../../models/IndividualPerson';

export const UserContext = createContext<UserContextType>({
  individualPersonContext: {
    person: new IndividualPerson().toAttributes,
    name: '',
    cpf: '',
    birth: '',
    handleNameChange: (e: ChangeEvent<HTMLInputElement>) => {
      /** */
    },
    handleCpfChange: async (e: ChangeEvent<HTMLInputElement>) => {
      /** */
    },
    handleBirthChange: (e: ChangeEvent<HTMLInputElement>) => {
      /** */
    },
    loadPerson: (person: IIndividualPerson) => {
      /** */
    },
  },
  clearFields: () => {
    /** */
  },
  persistData: async () => {
    /** */
  },
});

const UserProvider = (props: any) => {
  const individualPersonContext = useContext<FormIndividualPersonContextType>(
    IndividualPersonContext,
  );

  useEffect(() => {
    individualPersonContext.loadPerson(
      {
        id: 0,
        name: 'Lucas',
        cpf: '430.987.568-88',
        birth: '1994-05-06',
      },
      false,
    );
  }, []);

  const clearFields = () => {
    /** */
  };
  const persistData = async () => {
    /** */
  };

  return (
    <UserContext.Provider value={{ individualPersonContext, clearFields, persistData }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
