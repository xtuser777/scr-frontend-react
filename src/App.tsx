import React from 'react';

import 'react-toastify/dist/ReactToastify.css';
import Router from './router';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Router />
      <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
    </>
  );
}

export default App;
