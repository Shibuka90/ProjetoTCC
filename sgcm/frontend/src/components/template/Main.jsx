import './Main.css'
import Header from './Header'
import React from 'react'


export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className="content container-fluid">
            <div className="menu-main">
                <a href="#/cadastro">
                    <i className="fa fa-folder"></i><span>Cadastros Gerais</span>
                </a>
                <a href="#/agendamento">
                    <i className="fa fa-calendar"></i><span>Agendamento</span>
                </a>
                <a href="#/atendimento">
                    <i className="fa fa-users"></i><span>Atendimento</span>
                </a>
                <a href="#/prontuario">
                    <i className="fa fa-first-aid"></i><span>Atendimento</span>
                </a>
            </div>
        </main>
    </React.Fragment>
