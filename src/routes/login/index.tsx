import React from 'react';
import LoginContext from '../../contexts/pages/login/login-context';
import LoginPage from '../../pages/login';

const LoginRoute = () => {
  return (
    <LoginContext>
      <LoginPage />
    </LoginContext>
  );
};

export default LoginRoute;
