import React, { Component } from "react";
import firebase from "../../Firebase";
import { Link } from "react-router-dom";
import '../../styles/cadastro.css'

class Cadastro extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      senha: "",
      nome: "",
      sobrenome: "",
      nascimento: "",
      dados:[]
    }

    this.gravar = this.gravar.bind(this);
    this.listar = this.listar.bind(this);
  }

  async gravar(){
    
    await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .then( async (retorno) => {

      await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        nascimento: this.state.nascimento
      });
    });
  }

  listar(){
    firebase.firestore().collection("usuario").get().then((retorno) => {
      var state = this.state;
      retorno.forEach((item) => {

        state.dados.push({
          id: item.id,
          nome: item.data().nome,
          sobrenome: item.data().sobrenome,
          nascimento: item.data().nascimento
        });
      });
      this.setState(state);
    });
  }


  render(){
    return(
      <div className="container-cadastro">
        <h1>Página de Cadastro</h1>
          <div className="dados">
          <input type="text" placeholder="E-mail" onChange={(e) => this.setState({email: e.target.value})} />
          <br/>
          <input type="password" placeholder="Senha" onChange={(e) => this.setState({senha: e.target.value})} />
          <br/>
          <input type="text" placeholder="Nome" onChange={(e) => this.setState({nome: e.target.value})} />
          <br/>
          <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({sobrenome: e.target.value})} />
          <br/>
          <input type="date" placeholder="Data de nascimento" onChange={(e) => this.setState({nascimento: e.target.value})} />
          <br/><br/>
          <button onClick={this.gravar}>Cadastrar</button> &nbsp;
          <br/><br/>
          <Link to='/'><button>Já tenho um cadastro</button></Link>
          </div>
      </div>
    );
  }
}

export default Cadastro;