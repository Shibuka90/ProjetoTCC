import React, { Component } from "react";
import Nav from "../template/Nav";
import { Link } from 'react-router-dom'
import Header from "../template/Header";


const headerProps = {
    icon:"folder",
    title:"Cadastros Gerais",
    subtitle:"Paciente - Médicos - Convênios - Especialidades - Serviços - Colaboradores"
}
export default class HomeCadastro extends Component {
    render() {
        return (
            <React.Fragment>          
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
    