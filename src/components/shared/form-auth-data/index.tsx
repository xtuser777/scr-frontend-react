import React, { useContext } from 'react';
import FieldsetCard from '../fieldset-card';
import FormInputGroupText from '../form-input-group-text';
import FormAuthDataContextType from '../../../contexts/components/shared/form-auth-data/auth-data-context-type';
import { FormAuthDataContext } from '../../../contexts/components/shared/form-auth-data/auth-data-context';
import FormInputSelect from '../form-input-select';
import FormInputGroupPassword from '../form-input-group-password';

const FormAuthData = (props: { type: number }) => {
  const {
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
  } = useContext<FormAuthDataContextType>(FormAuthDataContext);

  return (
    <FieldsetCard legend="Dados de autenticação" obrigatoryFields>
      <div className="row">
        {props.type == 1 ? (
          <FormInputSelect
            col={3}
            id="level"
            label="Nível"
            obrigatory
            value={level}
            message={errorLevel}
            handle={(e) => handleLevelChange(e)}
          >
            <option value="0">SELECIONE</option>
            {levels.map((level) => (
              <option key={level.id} value={level.id}>
                {level.description}
              </option>
            ))}
          </FormInputSelect>
        ) : (
          <></>
        )}
        <FormInputGroupText
          col={props.type == 1 ? 3 : 4}
          id="login"
          icon="glyphicon-user"
          label="Login"
          obrigatory
          value={login}
          message={errorLogin}
          handle={handleLoginChange}
        />
        <FormInputGroupPassword
          col={props.type == 1 ? 3 : 4}
          id="password"
          icon="glyphicon-lock"
          label="Senha"
          obrigatory
          value={password}
          message={errorPassword}
          handle={handlePasswordChange}
        />
        <FormInputGroupPassword
          col={props.type == 1 ? 3 : 4}
          id="password-confirm"
          icon="glyphicon-lock"
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
