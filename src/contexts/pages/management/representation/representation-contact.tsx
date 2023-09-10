import { createContext, useContext, useEffect } from 'react';
import RepresentationContextType from './representation-contact-type';
import FormEnterprisePersonContextType from '../../../components/shared/form-enterprise-person/enterprise-person-context-type';
import { FormEnterprisePersonContext } from '../../../components/shared/form-enterprise-person/enterprise-person-context';
import FormContactContextType from '../../../components/shared/form-contact/contact-context-type';
import { FormContactContext } from '../../../components/shared/form-contact/contact-context';

export const RepresentationContext = createContext<RepresentationContextType>({
  clearFields: () => {
    /** */
  },
  persistData: async () => {
    /** */
  },
});

const RepresentationProvider = (props: any) => {
  const enterprisePersonContext = useContext<FormEnterprisePersonContextType>(
    FormEnterprisePersonContext,
  );
  const contactContext = useContext<FormContactContextType>(FormContactContext);

  useEffect(() => {
    enterprisePersonContext.loadPerson({
      id: 1,
      corporateName: 'Teste',
      fantasyName: 'Teste',
      cnpj: '11.111.111/0001-23',
    });
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
  }, []);

  const clearFields = () => {
    enterprisePersonContext.clearFields();
    contactContext.clearFields();
  };

  const persistData = async () => {
    enterprisePersonContext.validateFields();
    contactContext.validateFields();
  };

  return (
    <RepresentationContext.Provider
      value={{
        clearFields,
        persistData,
      }}
    >
      {props.children}
    </RepresentationContext.Provider>
  );
};

export default RepresentationProvider;
