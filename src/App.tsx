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
import ProprietariesPage from './pages/management/proprietaries';
import ProprietaryPage from './pages/management/proprietary';
import ProprietaryContext from './contexts/pages/management/proprietary/proprietary-context';
import ProprietariesContext from './contexts/pages/management/proprietaries/proprietaries-context';
import RepresentationsContext from './contexts/pages/management/representations/representations-context';
import RepresentationsPage from './pages/management/representations';
import RepresentationPage from './pages/management/representation';
import RepresentationContext from './contexts/pages/management/representation/representation-contact';
import TrucksContext from './contexts/pages/management/trucks/trucks-context';
import TrucksPage from './pages/management/trucks';
import TruckContext from './contexts/pages/management/truck/truck-context';
import TruckPage from './pages/management/truck';
import TruckTypesContext from './contexts/pages/management/truck-types/truck-types-context';
import TruckTypesPage from './pages/management/truck-types';
import TruckTypeContext from './contexts/pages/management/truck-type/truck-type-context';
import TruckTypePage from './pages/management/truck-type';
import PaymentFormsContext from './contexts/pages/management/payment-forms/payment-forms-context';
import PaymentFormsPage from './pages/management/payment-forms';
import PaymentFormContext from './contexts/pages/management/payment-form/payment-form-context';
import PaymentFormPage from './pages/management/payment-form';

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
          path="/representacoes/gerenciar/proprietarios"
          element={
            <ProprietariesContext>
              <Layout>
                <ProprietariesPage />
              </Layout>
            </ProprietariesContext>
          }
        />
        <Route
          path="/representacoes/gerenciar/proprietario/:method/:id?"
          element={
            <FormContactContext>
              <FormIndividualPersonContext>
                <FormEnterprisePersonContext>
                  <ProprietaryContext>
                    <Layout>
                      <ProprietaryPage />
                    </Layout>
                  </ProprietaryContext>
                </FormEnterprisePersonContext>
              </FormIndividualPersonContext>
            </FormContactContext>
          }
        />
        <Route
          path="/representacoes/gerenciar/representacoes"
          element={
            <RepresentationsContext>
              <Layout>
                <RepresentationsPage />
              </Layout>
            </RepresentationsContext>
          }
        />
        <Route
          path="/representacoes/gerenciar/representacao/:method/:id?"
          element={
            <FormContactContext>
              <FormEnterprisePersonContext>
                <RepresentationContext>
                  <Layout>
                    <RepresentationPage />
                  </Layout>
                </RepresentationContext>
              </FormEnterprisePersonContext>
            </FormContactContext>
          }
        />
        <Route
          path="/representacoes/gerenciar/caminhoes"
          element={
            <TrucksContext>
              <Layout>
                <TrucksPage />
              </Layout>
            </TrucksContext>
          }
        />
        <Route
          path="/representacoes/gerenciar/caminhao/:method/:id?"
          element={
            <TruckContext>
              <Layout>
                <TruckPage />
              </Layout>
            </TruckContext>
          }
        />
        <Route
          path="/representacoes/gerenciar/tiposcaminhao"
          element={
            <TruckTypesContext>
              <Layout>
                <TruckTypesPage />
              </Layout>
            </TruckTypesContext>
          }
        />
        <Route
          path="/representacoes/gerenciar/tipocaminhao/:method/:id?"
          element={
            <TruckTypeContext>
              <Layout>
                <TruckTypePage />
              </Layout>
            </TruckTypeContext>
          }
        />
        <Route
          path="/representacoes/gerenciar/formaspagamento"
          element={
            <PaymentFormsContext>
              <Layout>
                <PaymentFormsPage />
              </Layout>
            </PaymentFormsContext>
          }
        />
        <Route
          path="/representacoes/gerenciar/formapagamento/:method/:id?"
          element={
            <PaymentFormContext>
              <Layout>
                <PaymentFormPage />
              </Layout>
            </PaymentFormContext>
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
