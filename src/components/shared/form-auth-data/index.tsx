import React, { useContext } from 'react';
import FieldsetCard from '../fieldset-card';
import FormInputGroupText from '../form-input-group-text';
import FormAuthDataContextType from '../../../contexts/components/shared/form-auth-data/auth-data-context-type';
import { FormAuthDataContext } from '../../../contexts/components/shared/form-auth-data/auth-data-context';

const FormAuthData = () => {
  const {
    login,
    password,
    passwordConfirm,
    errorLogin,
    errorPassword,
    errorPasswordConfirm,
    handleLoginChange,
    handlePasswordChange,
    handlePasswordConfirmChange,
  } = useContext<FormAuthDataContextType>(FormAuthDataContext);

  return (
    <FieldsetCard legend="Dados de autenticação" obrigatoryFields>
      <div className="row">
        <FormInputGroupText
          col={4}
          id="login"
          icon="glyphicon-user"
          label="Login"
          obrigatory
          value={login}
          message={errorLogin}
          handle={handleLoginChange}
        />
        <FormInputGroupText
          col={4}
          id="password"
          icon="glyphicon-user"
          label="Senha"
          obrigatory
          value={password}
          message={errorPassword}
          handle={handlePasswordChange}
        />
        <FormInputGroupText
          col={4}
          id="password-confirm"
          icon="glyphicon-user"
          label="Confirmar Senha"
          obrigatory
          value={passwordConfirm}
          message={errorPasswordConfirm}
          handle={handlePasswordConfirmChange}
        />
      </div>
    </FieldsetCard>
  );
};

export default FormAuthData;
