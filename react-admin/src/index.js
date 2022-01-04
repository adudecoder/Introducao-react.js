import React, { Component } from "react";
import reactDom from "react-dom";
import Button from "./Button";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import "./style.css";

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            clock: 1000,
            copo: 'água'
        }

    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                copo: 'suco'
            })

        }, 3000)
        
    }

    alterarCopo = () => {
        this.setState({
            copo: 'refrigerante'
        })
        // this.state.copo = 'refrigerante'
    }

    render() {
        const { clock, copo } = this.state
        return(
            <div>
                <h1>{ clock }</h1>
                <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
            </div>
        )
    }

}

// function soma(c, d) {
//     alert(c - d)
// }

// function App() {
//     return (
//         <div className="App">
//             Hello Wolrd
//             <Button onClick={() => soma(10, 20)} name="Victor Martins" />
//             <ComponentA>
//                 <ComponentB>
//                     <Button onClick={() => soma(40, 20)} name="Aline Oliveira" />
//                 </ComponentB>
//             </ComponentA>
//         </div>
//     )
// }

// function sum(a, b) {
//     return a + b;
// }

// function primeiroJSX() {
//     return (
//         <div className="teste">
//             Victor Martins - Introdução ao ReactJS
//             <h1>Soma: {sum(10, 20)}</h1>
//         </div>
//     )
// }

// const App = () => {
//     return (
//         <div className="App">
//             {primeiroJSX()}
//         </div>
//     )
// }

const rootElement = document.getElementById("root");
reactDom.render(<App />, rootElement);