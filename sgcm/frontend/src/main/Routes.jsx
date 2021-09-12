import React from "react";
import { Switch, Route, Redirect } from 'react-router'

import Home from "../components/home/Home";
import HomeCadastro from "../components/home/HomeCadastro";
import Pacientes from "../components/cadastro/paciente/Pacientes";

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cadastro' component={HomeCadastro} /> 
        <Route path='/pacientes' component={Pacientes}/>      
        <Redirect from='*' to='/' />
    </Switch>