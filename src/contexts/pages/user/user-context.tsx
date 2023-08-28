import { ChangeEvent, createContext, useContext, useEffect } from 'react';
import UserContextType from './user-context-type';
import { FormIndividualPersonContext as IndividualPersonContext } from '../../components/shared/form-individual-person/individual-person-context';
import FormIndividualPersonContextType from '../../components/shared/form-individual-person/individual-person-context-type';
import { IndividualPerson, IIndividualPerson } from '../../../models/IndividualPerson';
import FormContactContextType from '../../components/shared/form-contact/contact-context-type';
import { FormContactContext } from '../../components/shared/form-contact/contact-context';

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
    validateFields: async () => false,
    clearFields: () => {
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
  const contactContext = useContext<FormContactContextType>(FormContactContext);

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
    contactContext.loadContact({
      id: 0,
      phone: '(18) 3265-4356',
      cellphone: '(18) 98117-1256',
      email: 'lucaoxt@gmail.com',
      address: {
        id: 0,
        street: 'Rua Clarinho',
        number: '165',
        neighborhood: 'Vila Martins',
        complement: 'B',
        code: '19.600-000',
        city: {
          id: 5181,
          name: 'Rancharia',
          state: {
            id: 26,
            name: 'São Paulo',
            acronym: 'SP',
            cities: [
              {
                id: 5181,
                name: 'Rancharia',
                state: {
                  id: 26,
                  name: 'São Paulo',
                  acronym: 'SP',
                  cities: [],
                },
              },
            ],
          },
        },
      },
    });
  }, []);

  const clearFields = () => {
    individualPersonContext.clearFields();
    contactContext.clearFields();
  };
  const persistData = async () => {
    individualPersonContext.validateFields();
    contactContext.validateFields();
  };

  return (
    <UserContext.Provider value={{ individualPersonContext, clearFields, persistData }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
