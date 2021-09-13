import React, { Component } from "react";
import Main from "../../template/Main";
import { Link } from 'react-router-dom'
import Nav from "../../template/Nav";
import Header from "../../template/Header";

const headerProps = {
    icon: 'medikit',
    title: "Cadastros de Serviços",
}

export default class Servicos extends Component {
    renderButton() {
        return(
            <div className="rowButton">                
                <div className="col-12 d-flex">
                    <button className="botaoNovo">Novo</button>             
                    <button className="botaoExcluir">Excluir</button>
                </div>
            </div>
        )
    }
    renderTable() {
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Serviços</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Consulta</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Exames Clínicos</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Exames de Imagens</td>
                    </tr>
                </tbody>
            </table>
        )
    }
    render() {
        return (
            <React.Fragment>
                 <Main>
                  {this.renderButton()}
                  {this.renderTable()}
                </Main>
               <Nav>
                    <aside className="menu-area">
                        <nav className="menu-nav">
                            <Link to="/">
                                <i className="fa fa-home"></i><span>Módulos</span>
                            </Link>
                            <Link to="/pacientes">
                                <i className="fa fa-user"></i><span>Pacientes</span>
                            </Link>
                            <Link to="/medicos">
                                <i className="fa fa-user-md"></i><span>Médicos</span>
                            </Link>
                            <Link to="/convenios">
                                <i className="fa fa-book-medical"></i><span>Convênios</span>
                            </Link>
                            <Link to="/especialidades">
                                <i className="fa fa-stethoscope"></i><span>Especialidades</span>
                            </Link>
                            <Link to="/servicos">
                                <i className="fa fa-medkit"></i><span>Serviços</span>
                            </Link>
                            <Link to="/usuarios">
                                <i className="fa fa-users"></i><span>Colaboradores</span>
                            </Link>
                        </nav>
                    </aside>
                </Nav>               
                <Header {...headerProps} />
            </React.Fragment>
        )
    }
}