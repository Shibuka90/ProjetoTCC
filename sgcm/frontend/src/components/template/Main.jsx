import './Main.css'
import Header from './Header'
import { Link } from 'react-router-dom'
import React from 'react'

export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className="content container-fluid">
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
        </main>
    </React.Fragment>
