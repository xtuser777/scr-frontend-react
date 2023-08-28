import { ChangeEvent, createContext, useState } from 'react';
import FormIndividualPersonContextType from './individual-person-context-type';
import { IIndividualPerson, IndividualPerson } from '../../../../models/IndividualPerson';
import { Employee } from '../../../../models/Employee';

export const FormIndividualPersonContext = createContext<FormIndividualPersonContextType>(
  {
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
);

const FormIndividualPersonProvider = (props: any) => {
  const [person, setPerson] = useState<IIndividualPerson>(
    new IndividualPerson().toAttributes,
  );

  const [uniqueCpf, setUniqueCpf] = useState(false);

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birth, setBirth] = useState('');

  const [errorName, setErrorName] = useState<string | undefined>(undefined);
  const [errorCpf, setErrorCpf] = useState<string | undefined>(undefined);
  const [errorBirth, setErrorBirth] = useState<string | undefined>(undefined);

  const validateCpf = (cpf: string) => {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf === '') {
      return false;
    }
    // Elimina CPFs invalidos conhecidos
    if (
      cpf.length !== 11 ||
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999'
    ) {
      return false;
    }
    // Valida 1o digito
    let add = 0;
    for (let i = 0; i < 9; i++) {
      add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(9))) {
      return false;
    }
    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i++) {
      add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }

    return rev === parseInt(cpf.charAt(10));
  };

  const verifyCpf = async (cpf: string) => {
    const users = await new Employee().get();
    const user = users.find(
      (item) => (item.person.individual as IIndividualPerson).cpf == cpf,
    );

    return !!user && person.cpf != cpf;
  };

  const validate = {
    name: (value: string) => {
      if (value.length == 0) {
        return {
          message: 'O nome precisa ser preenchido',
          isValid: false,
        };
      } else if (value.length < 3) {
        return {
          message: 'O nome preenchido é inválido',
          isValid: false,
        };
      } else {
        person.name = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    cpf: async (value: string) => {
      if (value.length == 0) {
        return {
          message: 'O CPF precisa ser preenchido',
          isValid: false,
        };
      } else if (!validateCpf(value)) {
        return {
          message: 'O CPF preenchido é inválido',
          isValid: false,
        };
      } else if (uniqueCpf && (await verifyCpf(value))) {
        return {
          message: 'O CPF preenchido já existe no cadastro',
          isValid: false,
        };
      } else {
        person.cpf = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    birth: (value: string) => {
      const date = new Date(value);
      if (value.length == 0) {
        return {
          message: 'A data precisa ser preenchida',
          isValid: false,
        };
      } else if (new Date(Date.now()).getFullYear() - date.getFullYear() < 18) {
        return {
          message: 'A data preenchida é inválida',
          isValid: false,
        };
      } else {
        person.birth = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setErrorName(validate.name(e.target.value).message);
  };

  const handleCpfChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setCpf(e.target.value);
    setErrorCpf((await validate.cpf(e.target.value)).message);
  };

  const handleBirthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBirth(e.target.value);
    setErrorBirth(validate.birth(e.target.value).message);
  };

  const validateFields = async () => {
    return (
      validate.name(name).isValid &&
      (await validate.cpf(cpf)).isValid &&
      validate.birth(birth).isValid
    );
  };

  const clearFields = () => {
    setName('');
    setCpf('');
    setBirth('');
  };

  const loadPerson = (person: IIndividualPerson, uniqueCpf: boolean) => {
    setPerson(person);
    setUniqueCpf(uniqueCpf);
    setName(person.name);
    setCpf(person.cpf);
    setBirth(person.birth);
  };

  return (
    <FormIndividualPersonContext.Provider
      value={{
        person,
        name,
        cpf,
        birth,
        errorName,
        errorCpf,
        errorBirth,
        handleNameChange,
        handleCpfChange,
        handleBirthChange,
        validateFields,
        clearFields,
        loadPerson,
      }}
    >
      {props.children}
    </FormIndividualPersonContext.Provider>
  );
};

export default FormIndividualPersonProvider;
