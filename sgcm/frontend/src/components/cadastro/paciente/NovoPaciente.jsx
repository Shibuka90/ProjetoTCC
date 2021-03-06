import React, { Component } from "react";
import Main from "../../template/Main";
import { Link, Redirect } from 'react-router-dom'
import Nav from "../../template/Nav";
import Header from "../../template/Header";
import InputMask  from 'react-input-mask'

const headerProps = {
    icon: 'user',
    title: "Cadastros de Pacientes",
}

export default class NovoPaciente extends Component {
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
            return <Redirect to='/pacientes' />
        }
    }

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
                            <label className="emailLabel">E-mail:</label>
                            <input type="email" className="email" name="email" placeholder="Digite e-mail...." required/>
                            <label className="cpfLabel">CPF: </label>  
                            <InputMask mask={"999.999.999-99"} className="cpf" name="cpf" placeholder="xxx.xxxx.xxx-xx" required style={{width:"130px"}}/>
                            <label className="dataNascLabel" >Data Nascimento: </label>
                            <input type="date" className="dateNasc" style={{width: "160px"}} name="date" required/>
                            <label className="estadoCivilLabel">Estado Civil:</label>
                            <select className="estadoCivil" name="estacoCivil" style={{transform: "scale(1.1)"}}>
                                <option value="vazio"></option>
                                <option value="solteiro">Solteiro(a)</option>
                                <option value="divorciado">Divorciado(a)</option>
                                <option value="amasiado">Amasiado(a)</option>
                                <option value="casado">Casado(a)</option>
                                <option value="separado">Separado(a)</option>
                                <option value="uniaoEstavel">Uniao Estavel</option>
                                <option value="viuvo">Viuvo(a)</option>
                            </select>
                            <label className="sexoLabel">Sexo: </label>
                            <input className="sexo" type="radio" value="Male" name="gender"/>M
                            <input className="sexo" type="radio" value="Female" name="gender"/>F
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group3">
                            <label className="maeLabel">M??e:</label>
                            <input type="text" style={{width: "100%"}} name="mae" required  placeholder="Digite o nome..."/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group4">
                            <label className="paiLabel">Pai:</label>
                            <input type="text" style={{width: "100%"}} name="pai" required  placeholder="Digite o nome..."/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group5">
                            <label className="cepLabel">CEP: </label>
                            <InputMask mask={"99999-999"} style={{width: "90px"}} className="cep" name="cep" required placeholder="xxxxx-xxx" />
                            <label className="tipoLabel">Tipo:</label>
                            <select className="uf" name="uf" style={{transform: "scale(1.1)"}}>
                                <option value="vazio"></option>
                                <option value="area">Area</option>
                                <option value="avenida">Avenida</option>
                                <option value="alameda">Alameda</option>
                                <option value="beco">Beco</option>
                                <option value="chacara">Chacara</option>
                                <option value="condominio">Condominio</option>
                                <option value="conjunto">Conjunto</option>
                                <option value="distrito">Distrito</option>
                                <option value="estrada">Estrada</option>
                                <option value="fazenda">Fazenda</option>
                                <option value="ladeira">Ladeira</option>
                                <option value="largo">Largo</option>
                                <option value="loteamento">Loteamento</option>
                                <option value="modulo">Modulo</option>
                                <option value="parque">Parque</option>
                                <option value="praca">Praca</option>
                                <option value="quadra">Quadra</option>
                                <option value="residencial">Residencial</option>
                                <option value="rodovia">Rodovia</option>
                                <option value="rua">Rua</option>
                                <option value="sitio">Sitio</option>
                                <option value="travessa">Travessa</option>
                                <option value="trevo">Trevo</option>
                                <option value="vale">Vale</option>
                                <option value="via">Via</option>
                                <option value="viela">Viela</option>
                                <option value="vila">Vila</option>                                
                            </select>
                            <label className="enderecoLabel">Endere??o: </label>
                            <input type="text" style={{width: "100%"}} name="endereco" required placeholder="Digite o endere??o....." />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group6">
                            <label className="numeroLabel">N??</label>
                            <input type="text" style={{width: "50px"}} className="numero" name="numero" required maxLength="4" placeholder="xxxx"/>
                            <label className="bairroLabel">Bairro:</label>
                            <input type="text" style={{width: "100%"}} className="bairro" name="bairro" required placeholder="Digite o bairro..."/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group7">
                            <label className="cidadeLabel">Municipio: </label>
                            <input type="text" className="cidade" name="cidade" required placeholder="Digite a cidade...."/>
                            <label className="ufLabel">UF: </label>
                            <select className="uf" name="uf" style={{transform: "scale(1.1)"}}>
                                <option value="vazio"></option>
                                <option value="ac">AC</option>
                                <option value="al">AL</option>
                                <option value="ap">AP</option>
                                <option value="am">AM</option>
                                <option value="ba">BA</option>
                                <option value="ce">CE</option>
                                <option value="df">DF</option>
                                <option value="es">ES</option>
                                <option value="go">GO</option>
                                <option value="ma">MA</option>
                                <option value="mt">MT</option>
                                <option value="ms">MS</option>
                                <option value="mg">MG</option>
                                <option value="pa">PA</option>
                                <option value="pb">PB</option>
                                <option value="pr">PR</option>
                                <option value="pe">PE</option>
                                <option value="pi">PI</option>
                                <option value="rj">RJ</option>
                                <option value="rn">RN</option>
                                <option value="rs">RS</option>
                                <option value="ro">RO</option>
                                <option value="rr">RR</option>
                                <option value="sc">SC</option>
                                <option value="sp">SP</option>
                                <option value="se">SE</option>
                                <option value="to">TO</option>
                            </select>
                            <label className="telLabel">Tel:</label>
                            <InputMask mask={"(99)"} style={{width: "40px"}} className="ddd" name="ddd" required placeholder="xx"/>
                            <InputMask mask={"9999-9999"} style={{width: "95px"}} className="tel" name="tel" required placeholder="xxxx-xxxx"/>
                            <label className="telLabel">Cel:</label>
                            <InputMask mask={"(99)"} style={{width: "40px"}} className="ddd" name="ddd" required placeholder="xx"/>
                            <InputMask mask={"99999-9999"} style={{width: "105px"}} className="cel" name="cel" required placeholder="xxxxx-xxxx"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group8">
                            <label className="respLabel">Respons??vel:</label>
                            <input type="text" style={{width: "100%"}} className="resp" name="resp" placeholder="Digite o respons??vel...."/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group9">
                            <label className="convenioLabel">Conv??nio:</label>
                            <input type="text" style={{width: "50"}} className="convenio" name="convenio" placeholder="Digite o conv??nio...."/>
                            <label className="matriculaLabel">Matr??cula:</label>
                            <input type="text" style={{width: "50"}} className="matricula" name="matricula" maxLength="20" placeholder="xxxxxxxxxxxxxxxxxxx"/>
                            <label className="vencimentoLabel">Vencimento:</label>
                            <input type="date" style={{width: "160px"}} className="vencimento" name="venciomento" />
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
                                <i className="fa fa-home"></i><span>M??dulos</span>
                            </Link>
                            <Link to="/pacientes">
                                <i className="fa fa-user"></i><span>Pacientes</span>
                            </Link>
                            <Link to="/medicos">
                                <i className="fa fa-user-md"></i><span>M??dicos</span>
                            </Link>
                            <Link to="/convenios">
                                <i className="fa fa-book-medical"></i><span>Conv??nios</span>
                            </Link>
                            <Link to="/especialidades">
                                <i className="fa fa-stethoscope"></i><span>Especialidades</span>
                            </Link>
                            <Link to="/servicos">
                                <i className="fa fa-medkit"></i><span>Servi??os</span>
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