import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Header from './components/shared/header';
import HomeContext from './contexts/home/home-context';
import UserPage from './pages/user-page';
import FormIndividualPersonContext from './contexts/components/shared/form-individual-person/individual-person-context';
import UserContext from './contexts/pages/user/user-context';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <HomeContext>
                <HomePage />
              </HomeContext>
            }
          />
          <Route
            path="/configuracao/dados"
            element={
              <FormIndividualPersonContext>
                <UserContext>
                  <UserPage />
                </UserContext>
              </FormIndividualPersonContext>
            }
          />
        </Routes>
      </div>
      <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
    </BrowserRouter>
  );
}

export default App;
