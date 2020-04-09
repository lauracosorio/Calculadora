import React, { Component } from 'react'

class Teclado extends Component {

    render (){

        return (
            <>
            <div className="">
                <button
                 onClick={e => this.props.onClick(e.target.id)}
                  id="7"
                  className="button is-medium is-light"
                >
                  7
                </button>
                <button
                  onClick={e => this.props.onClick(e.target.id)}
                  id="8"
                  className="button is-medium is-light"
                >
                  8
                </button>
                <button onClick={e => this.props.onClick(e.target.id)} id="9" className="button is-medium is-light">
                  9
                </button>
                <button onClick={e => this.props.onClick(e.target.id)} id="/" className="button is-medium is-danger">
                  /
                </button>
              </div>
              <div className="Column is-half">
                <button onClick={e => this.props.onClick(e.target.id)} id="4" className="button is-medium is-light">
                  4
                </button>
                <button  onClick={e => this.props.onClick(e.target.id)} id="5" className="button is-medium is-light">
                  5
                </button>
                <button  onClick={e => this.props.onClick(e.target.id)} id="6" className="button is-medium is-light">
                  6
                </button>
                <button onClick={e => this.props.onClick(e.target.id)}
                  id="*"
                  className="button is-medium is-danger"
                >
                  *
                </button>
              </div>
              <div className="Column is-half">
                <button onClick={e => this.props.onClick(e.target.id)} id="1" className="button is-medium is-light">
                  1
                </button>
                <button onClick={e => this.props.onClick(e.target.id)} id="2" className="button is-medium is-light">
                  2
                </button>
                <button onClick={e => this.props.onClick(e.target.id)} id="3" className="button is-medium is-light">
                  3
                </button>
                <button onClick={e => this.props.onClick(e.target.id)} id="+" className="button is-medium is-danger">
                  +
                </button>
              </div>
              <div className="Column is-half">
                <button onClick={e => this.props.onClick(e.target.id)} id="." className="button is-medium is-light">
                  .
                </button>
                <button onClick={e => this.props.onClick(e.target.id)} id="0" className="button is-medium is-light">
                  0
                </button>
                <button onClick={e => this.props.onClick(e.target.id)} id="=" className="button is-medium is-light">
                  =
                </button>
                <button onClick={e => this.props.onClick(e.target.id)} id="-" className="button is-medium is-danger">
                  -
                </button>
              </div>
              <div className="Column is-half">
                <button
                  id="reset"
                  onClick={e => this.props.onClick(e.target.id)}
                  className="button is-medium clear is-light"
                >
                  Clear
                </button>
              </div>
            </>
        )
    }
 }

 export default Teclado;