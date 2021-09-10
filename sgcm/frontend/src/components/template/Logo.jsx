import './Logo.css'
import logo from '../../assets/imgs/logo.jpg'
import React, { Component } from 'react'

class Logo extends Component {
    render() {
        return(
           <aside className="logo">
              <a href="/" className="logo">
                  <img src={logo} alt="logo" />
              </a>
           </aside>
        )
    }
}

export default Logo