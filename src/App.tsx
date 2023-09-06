import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import HomeContext from './contexts/home/home-context';
import FormIndividualPersonContext from './contexts/components/shared/form-individual-person/individual-person-context';
import UserContext from './contexts/pages/user/user-context';
import FormContactContext from './contexts/components/shared/form-contact/contact-context';
import FormAuthDataContext from './contexts/components/shared/form-auth-data/auth-data-context';
import ParameterizationPage from './pages/configuration/parameterization';
import FormEnterprisePersonContext from './contexts/components/shared/form-enterprise-person/enterprise-person-context';
import ParameterizationContext from './contexts/pages/configuration/parameterization/parameterization-contact';
import UserPage from './pages/configuration/user-page';
import EmployeesPage from './pages/management/employees';
import EmployeesContext from './contexts/pages/management/employees/employees-context';
import EmployeePage from './pages/management/employee';
import EmployeeContext from './contexts/pages/management/employee/employee-context';
import LoginPage from './pages/login';
import Layout from './components/shared/layout';
import LoginContext from './contexts/pages/login/login-context';
import ClientsPage from './pages/management/clients';
import ClientPage from './pages/management/client';
import ClientContext from './contexts/pages/management/client/client-context';
import ClientsContext from './contexts/pages/management/clients/clients-context';
import DriversPage from './pages/management/drivers';
import DriversContext from './contexts/pages/management/drivers/drivers-context';
import DriverContext from './contexts/pages/management/driver/driver-context';
import DriverPage from './pages/management/driver';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomeContext>
              <Layout>
                <HomePage />
              </Layout>
            </HomeContext>
          }
        />
        <Route
          path="/representacoes/inicio"
          element={
            <HomeContext>
              <Layout>
                <HomePage />
              </Layout>
            </HomeContext>
          }
        />
        <Route
          path="/representacoes/configuracao/dados"
          element={
            <FormAuthDataContext>
              <FormContactContext>
                <FormIndividualPersonContext>
                  <UserContext>
                    <Layout>
                      <UserPage />
                    </Layout>
                  </UserContext>
                </FormIndividualPersonContext>
              </FormContactContext>
            </FormAuthDataContext>
          }
        />
        <Route
          path="/representacoes/configuracao/parametrizacao"
          element={
            <FormContactContext>
              <FormEnterprisePersonContext>
                <ParameterizationContext>
                  <Layout>
                    <ParameterizationPage />
                  </Layout>
                </ParameterizationContext>
              </FormEnterprisePersonContext>
            </FormContactContext>
          }
        />
        <Route
          path="/representacoes/gerenciar/funcionarios"
          element={
            <EmployeesContext>
              <Layout>
                <EmployeesPage />
              </Layout>
            </EmployeesContext>
          }
        />
        <Route
          path="/representacoes/gerenciar/funcionario/:method/:id?"
          element={
            <FormAuthDataContext>
              <FormContactContext>
                <FormIndividualPersonContext>
                  <EmployeeContext>
                    <Layout>
                      <EmployeePage />
                    </Layout>
                  </EmployeeContext>
                </FormIndividualPersonContext>
              </FormContactContext>
            </FormAuthDataContext>
          }
        />
        <Route
          path="/representacoes/gerenciar/clientes"
          element={
            <ClientsContext>
              <Layout>
                <ClientsPage />
              </Layout>
            </ClientsContext>
          }
        />
        <Route
          path="/representacoes/gerenciar/cliente/:method/:id?"
          element={
            <FormContactContext>
              <FormIndividualPersonContext>
                <FormEnterprisePersonContext>
                  <ClientContext>
                    <Layout>
                      <ClientPage />
                    </Layout>
                  </ClientContext>
                </FormEnterprisePersonContext>
              </FormIndividualPersonContext>
            </FormContactContext>
          }
        />
        <Route
          path="/representacoes/gerenciar/motoristas"
          element={
            <DriversContext>
              <Layout>
                <DriversPage />
              </Layout>
            </DriversContext>
          }
        />
        <Route
          path="/representacoes/gerenciar/motorista/:method/:id?"
          element={
            <FormContactContext>
              <FormIndividualPersonContext>
                <DriverContext>
                  <Layout>
                    <DriverPage />
                  </Layout>
                </DriverContext>
              </FormIndividualPersonContext>
            </FormContactContext>
          }
        />
        <Route
          path="/representacoes/login"
          element={
            <LoginContext>
              <LoginPage />
            </LoginContext>
          }
        />
      </Routes>
      <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
    </BrowserRouter>
  );
}

export default App;
