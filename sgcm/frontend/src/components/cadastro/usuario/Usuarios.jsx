import React, { Component } from "react";
import Main from "../../template/Main";
import { Link, Redirect } from 'react-router-dom'
import Nav from "../../template/Nav";
import Header from "../../template/Header";
// import usuarioServico from "../servico/usuario.servico";
// import axios from "axios";
// import { baseApiUrl } from "../../../main/global"; 

const headerProps = {
    icon: 'users',
    title: "Cadastros de Colaboradores",
}

export default class Usuarios extends Component { 
   getAll = async () => {
       try{ 
           const response = await fetch("http://localhost:4000/usuarios")
           const jsonData = await response.json()

           console.log(jsonData)
       }catch (err) {
           console.error(err.message)
       }
   }
    
    // constructor (props) {
    //     super(props)
    //     this.getUsuarios = this.getUsuarios.bind(this)
    //     this.listaUsuarios = this.listaUsuarios.bind(this)
    //     this.setUsuarios = this.setUsuarios.bind(this)

    //     this.state = {
    //         usuarios: [],
    //         currentUsuario: null,
    //         currentIndex: -1, 
    //     }
    // }

    //  componentDidMount() {
    //     this.getUsuarios()
    // }

   
    // getUsuarios(){
    //     usuarioServico.getAll()
    //         .then(response => {
    //             this.setState({
    //                 usuario: response.data
    //             })
    //             console.log(response.data)
    //         })
    //         .catch (e=> {
    //             console.log(e)
    //         })
    // }

    // listaUsuarios() {
    //     this.getUsuarios()
    //     this.setState({
    //         currentUsuario: null,
    //         currentIndex: -1
    //     })
    // }

    // setUsuarios(usuario, index){
    //     this.setState({
    //         currentUsuario: usuario,
    //         currentIndex: index
    //     })
    // }

    state = {
        redirect: false,      
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect){
            return <Redirect to='/novousuario' />
        }
    }

    renderButton() {
        return(
            <div className="rowButton">                
                <div className="col-12 d-flex justify-content-end">
                    <button className="botaoNovo" onClick={this.setRedirect}>Novo</button>             
                    <button className="botaoExcluir">Excluir</button>
                </div>
            </div>
        )
    }
    renderTable() {
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Data Nasc.</th>
                        <th>CPF</th>
                        <th>Cargo</th>
                        <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Keonny Schunzo Shibukawa</td>
                        <td>08/01/1990</td>
                        <td>12345678901</td>
                        <td>Gerente</td>
                        <td>Sim</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Daniele Christine Guimarães Shibukawa</td>
                        <td>31/08/1987</td>
                        <td>98765432190</td>
                        <td>Recepcionista</td>
                        <td>Não</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Solange Aparecida Vittori Shibukawa</td>
                        <td>17/08/1957</td>
                        <td>65498732102</td>
                        <td>Recepcionista</td>
                        <td>Não</td>
                    </tr>
                </tbody>
            </table>
        )
    }
    render() {
        // const { currentIndex, currentUsuario, usuarios } = this.state
        return (
            <React.Fragment>
                 <Main>
                     {this.renderRedirect()}
                     {this.renderButton()}
                     {this.renderTable()}                                                                                             
                </Main>
               <Nav>
                    <aside className="menu-area">
                        <nav className="menu-nav">
                            <Link to="/">
                                <i className="fa fa-home"></i><span>Módulos</span>
                            </Link>
                            <Link to="/pacientes">
                                <i className="fa fa-user"></i><span>Pacientes</span>
                            </Link>
                            <Link to="/medicos">
                                <i className="fa fa-user-md"></i><span>Médicos</span>
                            </Link>
                            <Link to="/convenios">
                                <i className="fa fa-book-medical"></i><span>Convênios</span>
                            </Link>
                            <Link to="/especialidades">
                                <i className="fa fa-stethoscope"></i><span>Especialidades</span>
                            </Link>
                            <Link to="/servicos">
                                <i className="fa fa-medkit"></i><span>Serviços</span>
                            </Link>
                            <Link to="/usuarios">
                                <i className="fa fa-users"></i><span>Colaboradores</span>
                            </Link>
                        </nav>
                    </aside>
                </Nav>               
                <Header {...headerProps} />
            </React.Fragment>
        )
    }
}