import React, { MouseEvent } from 'react';
import history from '../../../services/history';

import './style.css';

const Header = () => {
  const handleLogout = (e: MouseEvent) => {
    e.preventDefault();
    history.push('/inicio');
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

            <a className="navbar-brand white-bold" href="/representacoes/inicio">
              SCR
            </a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <a className="font-navbar white" href="/representacoes/inicio">
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
                    <a href="/representacoes/gerenciar/funcionario">Funcionários</a>
                  </li>
                  <li>
                    <a href="/representacoes/gerenciar/cliente">Clientes</a>
                  </li>
                  <li>
                    <a href="/representacoes/gerenciar/motorista">Motoristas</a>
                  </li>
                  <li>
                    <a href="/representacoes/gerenciar/proprietario">
                      Proprietários de Caminhões
                    </a>
                  </li>
                  <li>
                    <a href="/representacoes/gerenciar/caminhao">Caminhões</a>
                  </li>
                  <li>
                    <a href="/representacoes/gerenciar/representacao">Representações</a>
                  </li>
                  <li>
                    <a href="/representacoes/gerenciar/produto">Produtos</a>
                  </li>
                  <li>
                    <a href="/representacoes/gerenciar/tipocaminhao">Tipos de Caminhão</a>
                  </li>
                  <li>
                    <a href="/representacoes/gerenciar/categoria">Categorias de Contas</a>
                  </li>
                  <li>
                    <a href="/representacoes/gerenciar/formapagamento">
                      Formas de Pagamento
                    </a>
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
                    <a href="/representacoes/orcamento/venda">Venda</a>
                  </li>
                  <li>
                    <a href="/representacoes/orcamento/frete">Frete</a>
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
                    <a href="/representacoes/pedido/venda">Venda</a>
                  </li>
                  <li>
                    <a href="/representacoes/pedido/frete">Frete</a>
                  </li>
                  <li>
                    <a href="/representacoes/pedido/status">Alterar status</a>
                  </li>
                  <li>
                    <a href="/representacoes/pedido/autorizar">Autorizar Carregamento</a>
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
                    <a href="/representacoes/controlar/contas/pagar">Contas a Pagar</a>
                  </li>
                  <li>
                    <a href="/representacoes/controlar/contas/receber">
                      Contas a Receber
                    </a>
                  </li>
                  <li>
                    <a href="/representacoes/controlar/lancar/despesas">
                      Lançar Despesas
                    </a>
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
                    <a href="/representacoes/relatorio/cliente/">Clientes</a>
                  </li>
                  <li>
                    <a href="/representacoes/relatorio/pedido/venda">Pedido de Venda</a>
                  </li>
                  <li>
                    <a href="/representacoes/relatorio/pedido/frete">Pedido de Frete</a>
                  </li>
                  <li>
                    <a href="/representacoes/relatorio/orcamento/venda">
                      Orçamento de Venda
                    </a>
                  </li>
                  <li>
                    <a href="/representacoes/relatorio/orcamento/frete">
                      Orçamento de Frete
                    </a>
                  </li>
                  <li>
                    <a href="/representacoes/relatorio/conta/pagar">Contas a Pagar</a>
                  </li>
                  <li>
                    <a href="/representacoes/relatorio/conta/receber">Contas a Receber</a>
                  </li>
                  <li>
                    <a href="/representacoes/relatorio/produto">Produtos</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a
                  className="white"
                  href="/representacoes/help/ManualdoUsuárioSCR.html"
                  target="_blank"
                >
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
                    <a href="/representacoes/configuracao/parametrizacao">
                      Parametrização
                    </a>
                  </li>
                  <li>
                    <a href="/representacoes/configuracao/dados">Meus Dados</a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a href="/representacoes/login/logout.php">Sair</a>
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