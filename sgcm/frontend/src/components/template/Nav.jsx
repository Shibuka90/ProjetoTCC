import './Nav.css'
import React from 'react'
import Header from './Header'

export default props =>
    <React.Fragment>
        <Header {...props} />
        <aside className="menu-area">
            {props.children}
        </aside>
    </React.Fragment>
    