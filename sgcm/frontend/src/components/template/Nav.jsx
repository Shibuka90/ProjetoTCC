import './Nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
       <nav className="menu">
           <a href="#/">
               <i className="fa fa-home"></i><span>Módulos</span>
           </a>
           <a href="#/paciente">
               <i className="fa fa-user"></i><span>Pacientes</span>
           </a>
           <a href="#/medico">
               <i className="fa fa-user-md"></i><span>Médicos</span>
           </a>
           <a href="#/convenio">
               <i className="fa fa-book"></i><span>Convênios</span>
           </a>
           <a href="#/especialidades">
                <i class="fa fa-stethoscope"></i><span>Especialidades</span>
           </a>
           <a href="#/serviços">
                <i class="fa fa-medkit"></i><span>Serviços</span>
           </a>
           <a href="#/usuarios">
               <i className="fa fa-users"></i><span>Colaboradores</span>
           </a>
       </nav>
    </aside>