import React, { Component } from "react";
import "../Styles/calculadora.css";
import Teclado from "./Teclado";
import Resultado from "./Resultado";

class Calculadora extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: ""
    }
  }

  //Evento onClick

  onClick = button => {
    if(button === "=") {
      this.calculate()
    }

    //Para borrar

    else if( button === "reset") {
      this.reset()
    }

    //Para mostrar 

    else {
      this.setState({
        result: this.state.result + button
      })
    } 
  }

  //Función calcular

  calculate = () => {
    try {
      this.setState ({
        result: (eval(this.state.result) || "" + "")
      })
    } catch (e) {
      this.setState ({
        result: "error"
      })
    }
  };

  //Función para limpiar

  reset = () => {
    this.setState ({
      result:""
    })
  }

 
  render() {
    return (
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half container">
            <p className="title is-4 has-text-centered ">Calculadora</p>

            <div className="box has-text-centered">
              <div className="Column mostrar">
                <Resultado result= {this.state.result} />
              </div>
                <Teclado onClick = {this.onClick} />
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculadora;
