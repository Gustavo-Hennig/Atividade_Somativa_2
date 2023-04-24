import React, { Component } from "react";
import firebase from "../../Firebase";
import { Link, redirect } from "react-router-dom";
import '../../styles/login.css'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      senha: ""
    }

    this.acessar = this.acessar.bind(this);
  }

  async acessar(){
     await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
     .then(() => {
        window.location.href = "./principal";
     })
     .catch((erro)=>{
        
     });
  }

  render(){
    return(
      <div className="container-login">
        <h1>Login</h1>
        <input type="text" placeholder="E-mail" onChange={(e) => this.setState({email:e.target.value})} />
        <br/>
        <input type="password" placeholder="Senha" onChange={(e) => this.setState({senha:e.target.value})} />
        <br/>
        <button onClick={this.acessar}>Acessar</button>
        <br/><br/>
        Caso não tenha um cadastro, clique no botão abaixo: <br/> <br/> <Link to ="/cadastro"><button>Novo Cadastro</button></Link>
      </div>
    )
  }
}

export default Login;