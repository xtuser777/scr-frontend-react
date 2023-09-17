import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import HomeRoute from './routes/home';
import EventsRoute from './routes/events';
import UserDataRoute from './routes/configuration/data';
import ParameterizationRoute from './routes/configuration/parameterization';
import EmployeesRoute from './routes/management/employees';
import EmployeeRoute from './routes/management/employee';
import ClientsRoute from './routes/management/clients';
import ClientRoute from './routes/management/client';
import DriversRoute from './routes/management/drivers';
import DriverRoute from './routes/management/driver';
import ProprietariesRoute from './routes/management/proprietaries';
import ProprietaryRoute from './routes/management/proprietary';
import RepresentationsRoute from './routes/management/representations';
import RepresentationRoute from './routes/management/representation';
import TrucksRoute from './routes/management/trucks';
import TruckRoute from './routes/management/truck';
import TruckTypesRoute from './routes/management/truck-types';
import TruckTypeRoute from './routes/management/truck-type';
import PaymentFormsRoute from './routes/management/payment-forms';
import PaymentFormRoute from './routes/management/payment-form';
import CategoriesRoute from './routes/management/categories';
import CategoryRoute from './routes/management/category';
import LoginRoute from './routes/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/scr/inicio" element={<EventsRoute />} />
        <Route path="/scr/configuracao/dados" element={<UserDataRoute />} />
        <Route path="/scr/configuracao/parametrizacao" element={<ParameterizationRoute />} />
        <Route path="/scr/gerenciar/funcionarios" element={<EmployeesRoute />} />
        <Route path="/scr/gerenciar/funcionario/:method/:id?" element={<EmployeeRoute />} />
        <Route path="/scr/gerenciar/clientes" element={<ClientsRoute />} />
        <Route path="/scr/gerenciar/cliente/:method/:id?" element={<ClientRoute />} />
        <Route path="/scr/gerenciar/motoristas" element={<DriversRoute />} />
        <Route path="/scr/gerenciar/motorista/:method/:id?" element={<DriverRoute />} />
        <Route path="/scr/gerenciar/proprietarios" element={<ProprietariesRoute />} />
        <Route path="/scr/gerenciar/proprietario/:method/:id?" element={<ProprietaryRoute />} />
        <Route path="/scr/gerenciar/representacoes" element={<RepresentationsRoute />} />
        <Route path="/scr/gerenciar/representacao/:method/:id?" element={<RepresentationRoute />} />
        <Route path="/scr/gerenciar/caminhoes" element={<TrucksRoute />} />
        <Route path="/scr/gerenciar/caminhao/:method/:id?" element={<TruckRoute />} />
        <Route path="/scr/gerenciar/tiposcaminhao" element={<TruckTypesRoute />} />
        <Route path="/scr/gerenciar/tipocaminhao/:method/:id?" element={<TruckTypeRoute />} />
        <Route path="/scr/gerenciar/formaspagamento" element={<PaymentFormsRoute />} />
        <Route path="/scr/gerenciar/formapagamento/:method/:id?" element={<PaymentFormRoute />} />
        <Route path="/scr/gerenciar/categorias" element={<CategoriesRoute />} />
        <Route path="/scr/gerenciar/categoria/:method/:id?" element={<CategoryRoute />} />
        <Route path="/scr/login" element={<LoginRoute />} />
      </Routes>
      <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
    </BrowserRouter>
  );
}

export default App;
