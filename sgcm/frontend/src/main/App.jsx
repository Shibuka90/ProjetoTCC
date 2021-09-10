import './App.css'
import React, { Component } from 'react'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'


class Principal extends Component {
    render() {
        return(
            <div className="app">
                <Logo/>
                <Nav />
                <Main />
                <Footer />
            </div>
        )
    }
}
export default Principal