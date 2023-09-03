import React, { useContext } from 'react';

import './styles.css';
import LoginContextType from '../../contexts/pages/login/login-context-type';
import { LoginContext } from '../../contexts/pages/login/login-context';

const LoginPage = () => {
  const {
    user,
    password,
    errorUser,
    errorPassword,
    handleUserChange,
    handlePasswordChange,
    handleLoginClick,
  } = useContext<LoginContextType>(LoginContext);

  return (
    <div className="container-login">
      <div className="box">
        <div className="logo "></div>
        <br />
        <br />
        <div className="form-group">
          <label htmlFor="login">Login:</label>
          <input
            type="text"
            name="login"
            id="login"
            className="form-control"
            value={user}
            onChange={handleUserChange}
          />
          {errorUser ? (
            <span id="msgLogin" className="label label-danger">
              {errorUser}
            </span>
          ) : (
            ''
          )}
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            name="senha"
            id="senha"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
          />
          {errorPassword ? (
            <span id="msgSenha" className="label label-danger">
              {errorPassword}
            </span>
          ) : (
            ''
          )}
        </div>
        <button
          type="button"
          id="btnEntrar"
          className="btn btn-login btn-primary"
          onClick={handleLoginClick}
        >
          ENTRAR
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
