import React, { Component } from "react";
import Main from "../../template/Main";
import { Link, Redirect } from 'react-router-dom'
import Nav from "../../template/Nav";
import Header from "../../template/Header";
import InputMask  from 'react-input-mask'

const headerProps ={
    icon: 'stethoscope',
    title: "Cadastros de Especialidades",
}

export default class NovaEspecialidade extends Component{
    render() {
        return (
            <React.Fragment>
                 <Main> 
                     
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
