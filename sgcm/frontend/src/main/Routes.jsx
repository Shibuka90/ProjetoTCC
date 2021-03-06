import React from "react";
import { Switch, Route, Redirect } from 'react-router'

import Home from "../components/home/Home";
import HomeCadastro from "../components/home/HomeCadastro";
import Pacientes from "../components/cadastro/paciente/Pacientes";
import NovoPaciente from "../components/cadastro/paciente/NovoPaciente"
import Medicos from "../components/cadastro/medico/Medicos";
import NovoMedico from "../components/cadastro/medico/NovoMedico";
import Convenios from "../components/cadastro/convenio/Convenios";
import Especialidades from "../components/cadastro/especialidade/Especialidades";
import Servicos from "../components/cadastro/servico/Servicos";
import Usuarios from "../components/cadastro/usuario/Usuarios";
import NovoUsuario from "../components/cadastro/usuario/NovoUsuario";

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cadastro' component={HomeCadastro} /> 
        <Route path='/pacientes' component={Pacientes}/> 
        <Route path='/novopaciente' component={NovoPaciente}/>         
        <Route path='/medicos' component={Medicos} />
        <Route path="/novomedico" component={NovoMedico} />    
        <Route path='/convenios' component={Convenios} />    
        <Route path='/especialidades' component={Especialidades} />          
        <Route path='/servicos' component={Servicos} />     
        <Route path='/usuarios' component={Usuarios} />  
        <Route path='/novousuario' component={NovoUsuario} />  
        <Redirect from='*' to='/' />
    </Switch>