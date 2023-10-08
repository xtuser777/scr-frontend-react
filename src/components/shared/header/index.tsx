import React, { MouseEvent } from 'react';

import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import LoginService from '../../../services/login-service';
import { Security, UserToken } from '../../../utils/security';

const Header = () => {
  const navigate = useNavigate();
  const user: UserToken = Security.getUser();
  const loginService = new LoginService();
  const handleLogout = (e: MouseEvent) => {
    e.preventDefault();
    loginService.logout();
    navigate('/scr/login');
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

            <Link className="navbar-brand white-bold" to="/">
              SCR
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <Link className="font-navbar white" to="/scr/inicio">
                  Início
                </Link>
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
                  {user.user.level == 1 ? (
                    <li>
                      <Link to="/scr/gerenciar/funcionarios">Funcionários</Link>
                    </li>
                  ) : (
                    <></>
                  )}
                  <li>
                    <Link to="/scr/gerenciar/clientes">Clientes</Link>
                  </li>
                  <li>
                    <Link to="/scr/gerenciar/motoristas">Motoristas</Link>
                  </li>
                  <li>
                    <Link to="/scr/gerenciar/proprietarios">Proprietários de Caminhões</Link>
                  </li>
                  <li>
                    <Link to="/scr/gerenciar/caminhoes">Caminhões</Link>
                  </li>
                  <li>
                    <Link to="/scr/gerenciar/representacoes">Representações</Link>
                  </li>
                  <li>
                    <Link to="/scr/gerenciar/produtos">Produtos</Link>
                  </li>
                  <li>
                    <Link to="/scr/gerenciar/tiposcaminhao">Tipos de Caminhão</Link>
                  </li>
                  <li>
                    <Link to="/scr/gerenciar/categorias">Categorias de Contas</Link>
                  </li>
                  <li>
                    <Link to="/scr/gerenciar/formaspagamento">Formas de Pagamento</Link>
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
                    <Link to="/scr/orcamento/venda">Venda</Link>
                  </li>
                  <li>
                    <Link to="/scr/orcamento/frete">Frete</Link>
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
                    <Link to="/scr/pedido/venda">Venda</Link>
                  </li>
                  <li>
                    <Link to="/scr/pedido/frete">Frete</Link>
                  </li>
                  <li>
                    <Link to="/scr/pedido/status">Alterar status</Link>
                  </li>
                  {user.user.level == 1 ? (
                    <li>
                      <Link to="/scr/pedido/autorizar">Autorizar Carregamento</Link>
                    </li>
                  ) : (
                    <></>
                  )}
                </ul>
              </li>
              {user.user.level > 0 && user.user.level < 3 ? (
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
                      <Link to="/scr/controlar/contas/pagar">Contas a Pagar</Link>
                    </li>
                    <li>
                      <Link to="/scr/controlar/contas/receber">Contas a Receber</Link>
                    </li>
                    <li>
                      <Link to="/scr/controlar/lancar/despesas">Lançar Despesas</Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <></>
              )}
              {user.user.level == 1 ? (
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
                      <Link to="/scr/relatorio/cliente/">Clientes</Link>
                    </li>
                    <li>
                      <Link to="/scr/relatorio/pedido/venda">Pedido de Venda</Link>
                    </li>
                    <li>
                      <Link to="/scr/relatorio/pedido/frete">Pedido de Frete</Link>
                    </li>
                    <li>
                      <Link to="/scr/relatorio/orcamento/venda">Orçamento de Venda</Link>
                    </li>
                    <li>
                      <Link to="/scr/relatorio/orcamento/frete">Orçamento de Frete</Link>
                    </li>
                    <li>
                      <Link to="/scr/relatorio/conta/pagar">Contas a Pagar</Link>
                    </li>
                    <li>
                      <Link to="/scr/relatorio/conta/receber">Contas a Receber</Link>
                    </li>
                    <li>
                      <Link to="/scr/relatorio/produto">Produtos</Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <></>
              )}
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
                  {user.user.name}
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-header">Configurações</li>
                  {user.user.level == 1 ? (
                    <li>
                      <Link to="/scr/configuracao/parametrizacao">Parametrização</Link>
                    </li>
                  ) : (
                    <></>
                  )}
                  <li>
                    <Link to="/scr/configuracao/dados">Meus Dados</Link>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a onClick={handleLogout}>Sair</a>
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
