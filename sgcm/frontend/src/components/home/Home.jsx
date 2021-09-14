import React from "react";
import Main from "../template/Main";
import { Link } from 'react-router-dom'
import Nav from "../template/Nav";

export default props =>
    <React.Fragment>
        <Main icon="home" title="SGCM" subtitle="Sistema de Gestão de Clínica Médica - Módulos">
        <div className="menu-main">
            <div className="cadastro">
                <Link to="/cadastro">
                    <i className="fa fa-folder"></i>
                </Link>
                <span>Cadastros Gerais</span>
            </div>
            <div className="agendamento">
                <Link to="/agendamento">
                    <i className="fa fa-calendar"></i>
                </Link>
                <span>Agendamento</span>
            </div>
            <div className="atendimento">
                <Link to="/atendimento">
                    <i className="fa fa-users"></i>
                </Link>
                <span>Atendimento</span>
            </div>
            <div className="prontuario">
                <Link to="/prontuario">
                    <i className="fa fa-first-aid"></i>
                </Link>
                <span>Prontuário</span>
            </div>
        </div>
    </Main>
    
    

    </React.Fragment>
    