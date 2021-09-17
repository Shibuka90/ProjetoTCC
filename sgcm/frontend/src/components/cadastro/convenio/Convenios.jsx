import React, { Component } from "react";
import Main from "../../template/Main";
import { Link } from 'react-router-dom'
import Nav from "../../template/Nav";
import Header from "../../template/Header";

const headerProps = {
    icon: 'book-medical',
    title: "Cadastros de Convênios",
}

export default class Convenios extends Component {
  
    renderForm(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-6" ></div>
                    <div className="form-group1">
                        <label className="convenioLabel2">Convênio:</label>
                        <input type="text" className="convenio2" name="convenio2" placeholder="Digite o convênio...." style={{width: "50%"}} />
                        <button className="botaoIncluir">Incluir</button>
                        <button className="botaoExcluir1">Excluir</button>
                    </div>
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
                        <th>Convênio</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Unimed Campinas</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Beneficência Portuguesa</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Santa Tereza</td>
                    </tr>
                </tbody>
            </table>
        )
    }
    render() {
        return (
            <React.Fragment>
                 <Main>
                  {this.renderForm()}
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