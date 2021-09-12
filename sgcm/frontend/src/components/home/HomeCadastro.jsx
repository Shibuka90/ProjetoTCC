import React from "react";
import Nav from "../template/Nav";
import { Link } from 'react-router-dom'

export default props =>
    <Nav icon="folder" title="Cadastros Gerais" subtitle="Paciente - Médicos - Convênios - Especialidades - Serviços - Colaboradores">
        <aside className="menu-area">
            <nav className="menu-nav">
                <Link to="/">
                    <i className="fa fa-home"></i><span>Módulos</span>
                </Link>
                <Link to="/cadastro/paciente">
                    <i className="fa fa-user"></i><span>Pacientes</span>
                </Link>
                <Link to="/cadastro/medico">
                    <i className="fa fa-user-md"></i><span>Médicos</span>
                </Link>
                <Link to="/cadastro/convenio">
                    <i className="fa fa-book-medical"></i><span>Convênios</span>
                </Link>
                <Link to="/cadastro/especialidades">
                    <i class="fa fa-stethoscope"></i><span>Especialidades</span>
                </Link>
                <Link to="/cadastro/serviços">
                    <i class="fa fa-medkit"></i><span>Serviços</span>
                </Link>
                <Link to="/cadastro/usuarios">
                    <i className="fa fa-users"></i><span>Colaboradores</span>
                </Link>
            </nav>
        </aside>
    </Nav>