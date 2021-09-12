import './App.css'
import React from 'react'
import {BrowserRouter } from 'react-router-dom'

import Logo from '../components/template/Logo'
import Footer from '../components/template/Footer'
import Routes from './Routes'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
 