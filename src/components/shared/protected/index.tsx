import React from 'react';
import { Navigate } from 'react-router-dom';
import { Security } from '../../../utils/security';

export const Protected = (props: { children: JSX.Element }) => {
  const isloggedIn = Security.hasToken();
  if (!isloggedIn) {
    return <Navigate to="/scr/login" replace />;
  }

  return props.children;
};
