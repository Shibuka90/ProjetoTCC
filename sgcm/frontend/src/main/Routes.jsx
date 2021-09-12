import React from "react";
import { Switch, Route, Redirect } from 'react-router'

import Home from "../components/home/Home";
import HomeCadastro from "../components/home/HomeCadastro";

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cadastro' component={HomeCadastro} />       
        <Redirect from='*' to='/' />
    </Switch>