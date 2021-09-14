import React, { Component } from "react";
import Main from "../../template/Main";
import { Link } from 'react-router-dom'
import Nav from "../../template/Nav";
import Header from "../../template/Header";

const headerProps = {
    icon: 'user',
    title: "Cadastros de Pacientes",
}

export default class NovoPaciente extends Component {

    renderForm() {
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 ">
                        <div className="form-group1">
                            <label className="nomeLabel">Nome: </label>
                            <input type="text" className="form-control" name="name" placeholder="Digite o nome....." required />                            
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group2">
                            <label className="cpf">CPF: </label>                           
                            <input type="text" className="cpf" name="cpf" maxLength="14" placeholder="xxx.xxx.xxx-xx" />                         
                            <label className="dataNasc" >Data Nasc.: </label>
                            <input type="date" className="dateNasc" name="date" required/>
                            <label className="sexoLabel">Sexo: </label>
                            <input className="sexo" type="radio" value="Male" name="gender"/>M
                            <input className="sexo" type="radio" value="Female" name="gender"/>F
                        </div>
                    </div>
                </div>
            </div>
        )
    }      
    render() {
        return (
            <React.Fragment>
                 <Main>                 
                    {this.renderForm()}
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