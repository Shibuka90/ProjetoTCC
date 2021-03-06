import React, { Component } from "react";
import Main from "../../template/Main";
import { Link, Redirect } from 'react-router-dom'
import Nav from "../../template/Nav";
import Header from "../../template/Header";

const headerProps = {
    icon: 'user-md',
    title: "Cadastros de Médicos",
}

export default class Medicos extends Component {
    state = {
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect){
            return <Redirect to='/novomedico' />
        }
    }
    renderButton() {
        return(
            <div className="rowButton">                
                <div className="col-12 d-flex justify-content-end">
                    <button className="botaoNovo" onClick={this.setRedirect}>Novo</button>             
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
                        <th>Nome</th>
                        <th>Especialidade</th>
                        <th>CRM</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Keonny Schunzo Shibukawa</td>
                        <td>08/01/1990</td>
                        <td>12345678901</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Daniele Christine Guimarães Shibukawa</td>
                        <td>31/08/1987</td>
                        <td>98765432190</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Solange Aparecida Vittori Shibukawa</td>
                        <td>17/08/1957</td>
                        <td>65498732102</td>
                    </tr>
                </tbody>
            </table>
        )
    }
    render() {
        return (
            <React.Fragment>
                 <Main>
                     {this.renderRedirect()}
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