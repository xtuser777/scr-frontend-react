import { createContext, useContext, useEffect } from 'react';
import UserContextType from './user-context-type';
import { FormIndividualPersonContext as IndividualPersonContext } from '../../components/shared/form-individual-person/individual-person-context';
import FormIndividualPersonContextType from '../../components/shared/form-individual-person/individual-person-context-type';
import FormContactContextType from '../../components/shared/form-contact/contact-context-type';
import { FormContactContext } from '../../components/shared/form-contact/contact-context';
import FormAuthDataContextType from '../../components/shared/form-auth-data/auth-data-context-type';
import { FormAuthDataContext } from '../../components/shared/form-auth-data/auth-data-context';

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

  useEffect(() => {
    individualPersonContext.loadPerson(
      {
        id: 1,
        name: 'Lucas',
        cpf: '430.987.568-88',
        birth: '1994-05-06',
      },
      false,
    );
    contactContext.loadContact({
      id: 1,
      phone: '(18) 3265-4356',
      cellphone: '(18) 98117-1256',
      email: 'lucaoxt@gmail.com',
      address: {
        id: 1,
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
    authContext.loadData({
      id: 1,
      login: 'suporte',
      password: '',
      type: 1,
      admission: '2023-01-01',
      person: {
        id: 1,
        type: 1,
        individual: {
          id: 1,
          name: 'Lucas',
          cpf: '430.987.568-88',
          birth: '1994-05-06',
        },
        contact: {
          id: 1,
          phone: '(18) 3265-4356',
          cellphone: '(18) 98117-1256',
          email: 'lucaoxt@gmail.com',
          address: {
            id: 1,
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
        },
      },
      level: { id: 1, description: 'Administrador' },
      demission: undefined,
    });
  }, []);

  const persistData = async () => {
    await individualPersonContext.validateFields();
    contactContext.validateFields();
    await authContext.validateFields();
  };

  return <UserContext.Provider value={{ persistData }}>{props.children}</UserContext.Provider>;
};

export default UserProvider;
