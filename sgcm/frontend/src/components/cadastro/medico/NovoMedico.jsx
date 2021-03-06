import React, { Component } from "react";
import Main from "../../template/Main";
import { Link, Redirect } from 'react-router-dom'
import Nav from "../../template/Nav";
import Header from "../../template/Header";
import InputMask  from 'react-input-mask'

const headerProps ={
    icon: 'user-md',
    title: "Cadastros de Médicos"
}

export default class NovoMedico extends Component {
    state = {
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect){
            return <Redirect to='/medicos' />
        }
    }

    renderForm()
    {
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12">
                        <div className="form-group1">
                            <label className="nomeLabel">Nome:</label>
                            <input type="text" className="nome" style={{width: "100%"}} name="name" placeholder="Digite o nome....." required />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group2">
                            <label className="emailLabel">E-mail:</label>
                            <input type="email" className="email" name="email" placeholder="Digite e-mail...." required/>
                            <label className="cpfLabel">CPF: </label>  
                            <InputMask mask={"999.999.999-99"} className="cpf" name="cpf" placeholder="xxx.xxxx.xxx-xx" required style={{width:"130px"}}/>
                            <label className="dataNascLabel" >Data Nascimento: </label>
                            <input type="date" className="dateNasc" style={{width: "160px"}} name="date" required/>
                            <label className="sexoLabel">Sexo: </label>
                            <input className="sexo" type="radio" value="Male" name="gender"/>M
                            <input className="sexo" type="radio" value="Female" name="gender"/>F
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group3">
                            <label className="especialidadeLabel">Especialidade:</label>
                            <input type="text" className="especialidade" name="especialidade " placeholder="Digite a especialidade..." required style={{width: "343px"}} />
                            <label className="crmLabel">CRM:</label>
                            <input type="text" className="crm" name="crm" placeholder="xxxxxxxxxx" required style={{width: "120px"}} maxLength="10" />
                        
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group5">
                            <label className="cepLabel">CEP: </label>
                            <InputMask mask={"99999-999"} style={{width: "90px"}} className="cep" name="cep" required placeholder="xxxxx-xxx" />
                            <label className="tipoLabel">Tipo:</label>
                            <input type="text" className="tipo" name="tipo" required style={{width: "90px"}} />
                            <label className="enderecoLabel">Endereço: </label>
                            <input type="text" style={{width: "100%"}} name="endereco" required placeholder="Digite o endereço....." />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group6">
                            <label className="numeroLabel">Nº</label>
                            <input type="text" style={{width: "50px"}} className="numero" name="numero" required maxLength="4" placeholder="xxxx"/>
                            <label className="bairroLabel">Bairro:</label>
                            <input type="text" style={{width: "100%"}} className="bairro" name="bairro" required placeholder="Digite o bairro..."/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group7">
                            <label className="cidadeLabel">Cidade: </label>
                            <input type="text" className="cidade" name="cidade" required placeholder="Digite a cidade...."/>
                            <label className="ufLabel">UF: </label>
                            <input type="text" style={{width: "30px"}} className="uf" name="uf" required maxLength="2" placeholder="xx"/>
                            <label className="telLabel">Tel:</label>
                            <InputMask mask={"(99)"} style={{width: "40px"}} className="ddd" name="ddd" required placeholder="xx"/>
                            <InputMask mask={"9999-9999"} style={{width: "95px"}} className="tel" name="tel" required placeholder="xxxx-xxxx"/>
                            <label className="telLabel">Cel:</label>
                            <InputMask mask={"(99)"} style={{width: "40px"}} className="ddd" name="ddd" required placeholder="xx"/>
                            <InputMask mask={"99999-9999"} style={{width: "105px"}} className="cel" name="cel" required placeholder="xxxxx-xxxx"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group10">
                            <button className="botaoIncluir">Incluir</button>
                            <button className="botaoCancelar" onClick={this.setRedirect}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                 <Main> 
                     {this.renderRedirect()}               
                     {this.renderForm()}
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