import React from "react";


class App5 extends React.Component{
    constructor(props){
        super(props);
        this.state = {nome: undefined, txtNome: ''};
    }

    changetxtName = (event)=>{
        this.setState({txtNome: event.target.value})
    }

    componentDidMount = () => { // é executado logo apos nosso componente ser criado
        const nome = sessionStorage.getItem('nome');
        if (nome) this.setState({nome}); // verifica se ja tem um nome salvo no cache/cookie da pagina
    }

    persistName = ()=>{
        this.setState({nome: this.state.txtNome});
        sessionStorage.setItem('nome', this.state.txtNome); // salva as informaçoes no cookie do navegador
    }
  render(){
      const renderForm = () => {
        return(
            <>
              Nome: <input type="text" value={this.state.nome} onChange={this.changetxtName}></input>
              <button onClick={this.persistName}>Salvar</button>
            </>
        );
      }              

      const renderTxt = () =>{
        return(
            <>
              <p>
                  Olá {this.state.nome}
              </p>
            </>
          );
      }

      return !this.state.nome ? renderForm() : renderTxt();
    
  }
}

export default App5;