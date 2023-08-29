import { createContext, useContext, useEffect } from 'react';
import ParameterizationContextType from './parameterization-contact-type';
import FormEnterprisePersonContextType from '../../../components/shared/form-enterprise-person/enterprise-person-context-type';
import { FormEnterprisePersonContext } from '../../../components/shared/form-enterprise-person/enterprise-person-context';
import FormContactContextType from '../../../components/shared/form-contact/contact-context-type';
import { FormContactContext } from '../../../components/shared/form-contact/contact-context';

export const ParameterizationContext = createContext<ParameterizationContextType>({
  persistData: async () => {
    /** */
  },
});

const ParameterizationProvider = (props: any) => {
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

  const persistData = async () => {
    enterprisePersonContext.validateFields();
    contactContext.validateFields();
  };

  return (
    <ParameterizationContext.Provider
      value={{
        persistData,
      }}
    >
      {props.children}
    </ParameterizationContext.Provider>
  );
};

export default ParameterizationProvider;
