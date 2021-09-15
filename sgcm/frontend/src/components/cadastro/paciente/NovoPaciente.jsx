import React, { Component } from "react";
import Main from "../../template/Main";
import { Link } from 'react-router-dom'
import Nav from "../../template/Nav";
import Header from "../../template/Header";
import InputMask  from 'react-input-mask'

const headerProps = {
    icon: 'user',
    title: "Cadastros de Pacientes",
}

export default class NovoPaciente extends Component {

    renderForm() {
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 ">
                        <div className="form-group1">
                            <label className="nomeLabel">Nome: </label>
                            <input type="text" className="nome" style={{width: "100%"}} name="name" placeholder="Digite o nome....." required />                            
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group2">
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
                            <label className="maeLabel">Mãe:</label>
                            <input type="text" style={{width: "100%"}} name="mae" required  placeholder="Digite no nome..."/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group4">
                            <label className="paiLabel">Pai:</label>
                            <input type="text" style={{width: "100%"}} name="pai" required  placeholder="Digite no nome..."/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group5">
                            <label className="cepLabel">CEP: </label>
                            <InputMask mask={"99999-999"} style={{width: "90px"}} className="cep" name="cep" required placeholder="xxxxx-xxx" />
                            <label className="enderecoLabel">Endereço: </label>
                            <input type="text" style={{width: "100%"}} name="endereco" required placeholder="Digite o endereço....." />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group6">
                            <label className="numeroLabel">Nº</label>
                            <input type="text" style={{width: "50px"}} className="numero" name="numero" required maxLength="4"/>
                            <label className="bairroLabel">Bairro:</label>
                            <input type="text" style={{width: "100%"}} className="bairro" name="bairro" required />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group7">
                            <label className="cidadeLabel">Cidade: </label>
                            <input type="text" className="cidade" name="cidade" required />
                            <label className="ufLabel">UF: </label>
                            <input type="text" style={{width: "30px"}} className="uf" name="uf" required maxLength="2"/>
                            <label className="telLabel">Tel:</label>
                            <InputMask mask={"(99)"} style={{width: "40px"}} className="ddd" name="ddd" required />
                            <InputMask mask={"9999-9999"} style={{width: "95px"}} className="tel" name="tel" required />
                            <label className="telLabel">Cel:</label>
                            <InputMask mask={"(99)"} style={{width: "40px"}} className="ddd" name="ddd" required />
                            <InputMask mask={"99999-9999"} style={{width: "105px"}} className="cel" name="cel" required/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group8">
                            <label className="respLabel">Responsável:</label>
                            <input type="text" style={{width: "100%"}} className="resp" name="resp" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group9">
                            <label className="convenioLabel">Convênio:</label>
                            <input type="text" style={{width: "50"}} className="convenio" name="convenio" />
                            <label className="matriculaLabel">Matrícula:</label>
                            <input type="text" style={{width: "50"}} className="matricula" name="matricula" maxLength="20" />
                            <label className="vencimentoLabel">Vencimento:</label>
                            <input type="date" style={{width: "160px"}} className="vencimento" name="venciomento" />
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