import React from "react";
import { Switch, Route, Redirect } from 'react-router'

import Cadastro from "../components/cadastro/Cadastro";
import Home from "../components/home/Home";

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cadastro' component={Cadastro} />       
        <Redirect from='*' to='/' />
    </Switch>