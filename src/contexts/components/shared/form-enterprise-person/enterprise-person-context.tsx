import { ChangeEvent, createContext, useState } from 'react';
import FormEnterprisePersonContextType from './enterprise-person-context-type';
import { EnterprisePerson, IEnterprisePerson } from '../../../../models/EnterprisePerson';

export const FormEnterprisePersonContext = createContext<FormEnterprisePersonContextType>(
  {
    person: new EnterprisePerson().toAttributes,
    corporateName: '',
    fantasyName: '',
    cnpj: '',
    handleCorporateNameChange: (e: ChangeEvent<HTMLInputElement>) => {
      /** */
    },
    handleFantasyNameChange: (e: ChangeEvent<HTMLInputElement>) => {
      /** */
    },
    handleCnpjChange: (e: ChangeEvent<HTMLInputElement>) => {
      /** */
    },
    validateFields: () => false,
    clearFields: () => {
      /** */
    },
    loadPerson: (person: IEnterprisePerson) => {
      /** */
    },
  },
);

const FormEnterprisePersonProvider = (props: any) => {
  const [person, setPerson] = useState<IEnterprisePerson>(
    new EnterprisePerson().toAttributes,
  );

  const [corporateName, setCorporateName] = useState('');
  const [fantasyName, setFantasyName] = useState('');
  const [cnpj, setCnpj] = useState('');

  const [errorCorporateName, setErrorCorporateName] = useState<string | undefined>(
    undefined,
  );
  const [errorFantasyName, setErrorFantasyName] = useState<string | undefined>(undefined);
  const [errorCnpj, setErrorCnpj] = useState<string | undefined>(undefined);

  const validateCnpj = (cnpj: string) => {
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj === '') return false;

    if (cnpj.length !== 14) return false;

    // Elimina CNPJs invalidos conhecidos
    if (
      cnpj === '00000000000000' ||
      cnpj === '11111111111111' ||
      cnpj === '22222222222222' ||
      cnpj === '33333333333333' ||
      cnpj === '44444444444444' ||
      cnpj === '55555555555555' ||
      cnpj === '66666666666666' ||
      cnpj === '77777777777777' ||
      cnpj === '88888888888888' ||
      cnpj === '99999999999999'
    )
      return false;

    // Valida DVs
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    const digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += Number.parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado.toString().charAt(0) !== digitos.charAt(0)) return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += Number.parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado.toString().charAt(0) !== digitos.charAt(1)) return false;

    return true;
  };

  const validate = {
    corporateName: (value: string) => {
      if (value.length == 0) {
        return {
          message: 'A razão social precisa ser preenchida.',
          isValid: false,
        };
      } else if (value.length < 5) {
        return {
          message: 'A razão social inválida.',
          isValid: false,
        };
      } else {
        person.corporateName = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    fantasyName: (value: string) => {
      if (value.length == 0) {
        return {
          message: 'O nome fantasia precisa ser preenchido.',
          isValid: false,
        };
      } else {
        person.fantasyName = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    cnpj: (value: string) => {
      if (value.length == 0) {
        return {
          message: 'O CNPJ precisa ser preenchido.',
          isValid: false,
        };
      } else if (!validateCnpj(value)) {
        return {
          message: 'O CNPJ preenchido é inválido.',
          isValid: false,
        };
      } else {
        person.cnpj = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
  };

  const handleCorporateNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCorporateName(e.target.value);
    setErrorCorporateName(validate.corporateName(e.target.value).message);
  };
  const handleFantasyNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFantasyName(e.target.value);
    setErrorFantasyName(validate.fantasyName(e.target.value).message);
  };
  const handleCnpjChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCnpj(e.target.value);
    setErrorCnpj(validate.cnpj(e.target.value).message);
  };

  const validateFields = () => {
    setErrorCorporateName(validate.corporateName(corporateName).message);
    setErrorFantasyName(validate.fantasyName(fantasyName).message);
    setErrorCnpj(validate.cnpj(cnpj).message);

    return (
      validate.corporateName(corporateName).isValid &&
      validate.fantasyName(fantasyName).isValid &&
      validate.cnpj(cnpj).isValid
    );
  };
  const clearFields = () => {
    setCorporateName('');
    setFantasyName('');
    setCnpj('');
  };
  const loadPerson = (person: IEnterprisePerson) => {
    setPerson(person);
    setCorporateName(person.corporateName);
    setFantasyName(person.fantasyName);
    setCnpj(person.cnpj);
  };

  return (
    <FormEnterprisePersonContext.Provider
      value={{
        person,
        corporateName,
        fantasyName,
        cnpj,
        errorCorporateName,
        errorFantasyName,
        errorCnpj,
        handleCorporateNameChange,
        handleFantasyNameChange,
        handleCnpjChange,
        validateFields,
        clearFields,
        loadPerson,
      }}
    >
      {props.children}
    </FormEnterprisePersonContext.Provider>
  );
};

export default FormEnterprisePersonProvider;
