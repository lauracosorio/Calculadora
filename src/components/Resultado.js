import React, { Component } from 'react';

class Resultado extends Component {

    render(){

        let {result}= this.props

        return (
            <>
                <p className="result">{result}</p>
            </>
        )
    }
}

export default Resultado;