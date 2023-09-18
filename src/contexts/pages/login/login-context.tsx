import { ChangeEvent, createContext, useState } from 'react';
import LoginContextType from './login-context-type';
import LoginService from '../../../services/login-service';
import { useNavigate } from 'react-router-dom';

export const LoginContext = createContext<LoginContextType>({
  user: '',
  password: '',
  handleUserChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleLoginClick: async () => {
    /** */
  },
});

const LoginProvider = (props: any) => {
  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const [errorUser, setErrorUser] = useState<string | undefined>(undefined);
  const [errorPassword, setErrorPassword] = useState<string | undefined>(undefined);

  const validate = {
    user: (value: string) => {
      if (value.length == 0) {
        setErrorUser('O Login precisa ser preenchido!');
        return false;
      } else {
        setErrorUser(undefined);
        return true;
      }
    },
    password: (value: string) => {
      if (value.length == 0) {
        setErrorPassword('A senha precisa ser preenchida!');
        return false;
      } else {
        if (value.length < 6) {
          setErrorPassword('A senha precisa ter 6 caracteres!');
          return false;
        } else {
          setErrorPassword(undefined);
          return true;
        }
      }
    },
  };

  const handleUserChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
    validate.user(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    validate.password(e.target.value);
  };

  const validateFields = () => {
    return validate.user(user) && validate.password(password);
  };

  const handleLoginClick = async () => {
    if (validateFields()) {
      const service = new LoginService();
      if (await service.login(user, password)) {
        navigate('/scr/inicio');
      }
    }
  };

  return (
    <LoginContext.Provider
      value={{
        user,
        password,
        errorUser,
        errorPassword,
        handleUserChange,
        handlePasswordChange,
        handleLoginClick,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
