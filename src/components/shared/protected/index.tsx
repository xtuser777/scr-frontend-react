import { Navigate } from 'react-router-dom';
export const Protected = (props: { children: JSX.Element }) => {
  const isloggedIn = false;
  if (!isloggedIn) {
    return (
      <Navigate to="/login" replace state={{ prevPath: document.location.pathname }} />
    );
  }

  return props.children;
};