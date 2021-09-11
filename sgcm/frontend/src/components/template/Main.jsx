import './Main.css'
import Header from './Header'
import React from 'react'

export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className="content container-fluid">
            <div className="menu-main">
                <div className="cadastro">
                    <a href="#/cadastro">
                        <i className="fa fa-folder"></i>
                    </a>
                    <span>Cadastros Gerais</span>                    
                </div>
                
                <div className="agendamento">
                    <a href="#/agendamento">
                        <i className="fa fa-calendar"></i>
                    </a>
                    <span>Agendamento</span>
                </div>
                {/* <div className="atendimento">
                    <a href="#/atendimento">
                        <i className="fa fa-users"></i>
                    </a>
                    <span>Atendimento</span>
                </div> */}
                {/* <div className="prontuario">
                    <a href="#/prontuario">
                        <i className="fa fa-first-aid"></i>
                    </a>
                    <span>Prontuário</span>
                </div>             */}
            </div>
        </main>
    </React.Fragment>
