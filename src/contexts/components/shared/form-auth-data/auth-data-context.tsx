import { ChangeEvent, createContext, useState } from 'react';
import FormAuthDataContextType from './auth-data-context-type';
import Employee from '../../../../models/employee';
import Level from '../../../../models/level';
import axios from '../../../../services/axios';
import EmployeeService from '../../../../services/employee-service';

export const FormAuthDataContext = createContext<FormAuthDataContextType>({
  data: new Employee(),
  levels: [],
  level: '0',
  login: '',
  password: '',
  passwordConfirm: '',
  handleLevelChange: async (e: ChangeEvent<HTMLSelectElement>) => {
    /** */
  },
  handleLoginChange: async (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handlePasswordConfirmChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  validateFields: async () => false,
  clearFields: () => {
    /** */
  },
  loadData: (data: Employee) => {
    /** */
  },
});

const FormAuthDataProvider = (props: any) => {
  const [data, setData] = useState<Employee>(new Employee());
  const [levels, setLevels] = useState<Level[]>([]);

  const [level, setLevel] = useState('0');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [errorLevel, setErrorLevel] = useState<string | undefined>(undefined);
  const [errorLogin, setErrorLogin] = useState<string | undefined>(undefined);
  const [errorPassword, setErrorPassword] = useState<string | undefined>(undefined);
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState<string | undefined>(undefined);

  const verifyAdmin = async () => {
    const users = await new EmployeeService().get();
    const user = users.filter((item) => item.level?.id == 1);

    return user.length == 1 && data.level && data.level.id == 1;
  };

  const vefifyLogin = async (login: string): Promise<boolean> => {
    const users = await axios.get('/employee');
    const user = users.data.find((item: { login: string }) => item.login == login);
    if (user) {
      if (user.id == data.id) return false;
      else return true;
    }

    return false;
  };

  const validate = {
    level: async (value: string) => {
      if (value == '0') {
        return {
          message: 'O nível de usuário precisa ser selecionado.',
          isValid: false,
        };
      } /*else if ((await verifyAdmin()) && value != '1') {
        return {
          message: 'O não é permitido alterar o último administrador.',
          isValid: false,
        };
      }*/ else {
        data.level = levels.find((item) => item.id == Number(value));
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    login: async (value: string) => {
      if (value.length == 0) {
        return {
          message: 'O login precisa ser preenchido',
          isValid: false,
        };
      } /* else if (await vefifyLogin(value)) {
        return {
          message: 'O login já exite no cadastro',
          isValid: false,
        };
      }*/ else {
        data.login = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    password: (value: string) => {
      if (value.length == 0) {
        return {
          message: 'A senha precisa ser preenchida',
          isValid: false,
        };
      } else if (value.length < 6) {
        return {
          message: 'A senha preenchida tem tamanho inválido',
          isValid: false,
        };
      } else {
        data.password = value;
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
    passwordConfirm: (value: string, password: string) => {
      if (value.length == 0) {
        return {
          message: 'A senha de confirmação precisa ser preenchida',
          isValid: false,
        };
      } else if (value.length < 6) {
        return {
          message: 'A senha preenchida tem tamanho inválido',
          isValid: false,
        };
      } else if (value != password)
        return {
          message: 'A senha preenchida tem tamanho inválido',
          isValid: false,
        };
      else {
        return {
          message: undefined,
          isValid: true,
        };
      }
    },
  };

  const handleLevelChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    setLevel(e.target.value);
    setErrorLevel((await validate.level(e.target.value)).message);
  };

  const handleLoginChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
    setErrorLogin((await validate.login(e.target.value)).message);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrorPassword(validate.password(e.target.value).message);
  };
  const handlePasswordConfirmChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
    setErrorPasswordConfirm(validate.passwordConfirm(e.target.value, password).message);
  };

  const validateFields = async () => {
    setErrorLevel((await validate.level(level)).message);
    setErrorLogin((await validate.login(login)).message);
    setErrorPassword(validate.password(password).message);
    setErrorPasswordConfirm(validate.passwordConfirm(passwordConfirm, password).message);

    return (
      (await validate.level(level)).isValid &&
      (await validate.login(login)).isValid &&
      validate.password(password).isValid &&
      validate.passwordConfirm(passwordConfirm, password).isValid
    );
  };
  const clearFields = () => {
    setLevel('0');
    setLogin('');
    setPassword('');
    setPasswordConfirm('');
  };
  const loadData = (data: Employee) => {
    setData(data);
    setLevel((data.level as Level).id.toString());
    setLogin(data.login);
  };

  return (
    <FormAuthDataContext.Provider
      value={{
        data,
        levels,
        level,
        login,
        password,
        passwordConfirm,
        errorLevel,
        errorLogin,
        errorPassword,
        errorPasswordConfirm,
        handleLevelChange,
        handleLoginChange,
        handlePasswordChange,
        handlePasswordConfirmChange,
        validateFields,
        clearFields,
        loadData,
      }}
    >
      {props.children}
    </FormAuthDataContext.Provider>
  );
};

export default FormAuthDataProvider;
