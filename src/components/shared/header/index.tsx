import React, { MouseEvent } from 'react';

import './style.css';
import { useNavigate } from 'react-router-dom';
import LoginService from '../../../services/login-service';

const Header = () => {
  const navigate = useNavigate();
  const loginService = new LoginService();
  const handleLogout = (e: MouseEvent) => {
    e.preventDefault();
    loginService.logout();
    navigate('/scr/inicio');
  };

  return (
    <header>
      <nav className="navbar navbar-fixed-top navbar-default navbar-scr">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <a className="navbar-brand white-bold" href="/scr/inicio">
              SCR
            </a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <a className="font-navbar white" href="/scr/inicio">
                  Início
                </a>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle white"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Gerenciar <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/scr/gerenciar/funcionarios">Funcionários</a>
                  </li>
                  <li>
                    <a href="/scr/gerenciar/clientes">Clientes</a>
                  </li>
                  <li>
                    <a href="/scr/gerenciar/motoristas">Motoristas</a>
                  </li>
                  <li>
                    <a href="/scr/gerenciar/proprietarios">Proprietários de Caminhões</a>
                  </li>
                  <li>
                    <a href="/scr/gerenciar/caminhoes">Caminhões</a>
                  </li>
                  <li>
                    <a href="/scr/gerenciar/scr">Representações</a>
                  </li>
                  <li>
                    <a href="/scr/gerenciar/produtos">Produtos</a>
                  </li>
                  <li>
                    <a href="/scr/gerenciar/tiposcaminhao">Tipos de Caminhão</a>
                  </li>
                  <li>
                    <a href="/scr/gerenciar/categorias">Categorias de Contas</a>
                  </li>
                  <li>
                    <a href="/scr/gerenciar/formaspagamento">Formas de Pagamento</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle white"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Orçamento <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/scr/orcamento/venda">Venda</a>
                  </li>
                  <li>
                    <a href="/scr/orcamento/frete">Frete</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle white"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pedido <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/scr/pedido/venda">Venda</a>
                  </li>
                  <li>
                    <a href="/scr/pedido/frete">Frete</a>
                  </li>
                  <li>
                    <a href="/scr/pedido/status">Alterar status</a>
                  </li>
                  <li>
                    <a href="/scr/pedido/autorizar">Autorizar Carregamento</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle white"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Controlar
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/scr/controlar/contas/pagar">Contas a Pagar</a>
                  </li>
                  <li>
                    <a href="/scr/controlar/contas/receber">Contas a Receber</a>
                  </li>
                  <li>
                    <a href="/scr/controlar/lancar/despesas">Lançar Despesas</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle white"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Relatório
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/scr/relatorio/cliente/">Clientes</a>
                  </li>
                  <li>
                    <a href="/scr/relatorio/pedido/venda">Pedido de Venda</a>
                  </li>
                  <li>
                    <a href="/scr/relatorio/pedido/frete">Pedido de Frete</a>
                  </li>
                  <li>
                    <a href="/scr/relatorio/orcamento/venda">Orçamento de Venda</a>
                  </li>
                  <li>
                    <a href="/scr/relatorio/orcamento/frete">Orçamento de Frete</a>
                  </li>
                  <li>
                    <a href="/scr/relatorio/conta/pagar">Contas a Pagar</a>
                  </li>
                  <li>
                    <a href="/scr/relatorio/conta/receber">Contas a Receber</a>
                  </li>
                  <li>
                    <a href="/scr/relatorio/produto">Produtos</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a className="white" href="/scr/help/ManualdoUsuárioSCR.html" target="_blank">
                  Ajuda
                </a>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle white-bold"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  USER
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-header">Configurações</li>
                  <li>
                    <a href="/scr/configuracao/parametrizacao">Parametrização</a>
                  </li>
                  <li>
                    <a href="/scr/configuracao/dados">Meus Dados</a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a href="/scr/login/logout.php">Sair</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
