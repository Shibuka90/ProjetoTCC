import './Main.css'
import Header from './Header'
import React, { Component } from 'react'

class Conteudo extends Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <main className="content">
                    
                    Conteúdo
                </main>
            </React.Fragment>
        )
    }
}

export default Conteudo