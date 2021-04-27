import React, { Component } from 'react' 
import Display from './Display'
import Range from './Range'
import Buttons from './Buttons'
import "./Contador.css"

class Contador extends Component {

    // constructor(props){
    //     super(props)

    //     this.state = {
    //         num: props.initialNumber
    //     }
    // }

    state = {
        num: this.props.initialNum || 0,
        range: this.props.range || 2
    };

    setRange = (newRange) => {
        this.setState({
            range: newRange,
        })
    }

    incrementar = () => {  //A função inc() recebe uma arrowFunction anonima que faz todo o incremento no objeto State
        this.setState({
            // num: ++this.state.num
            num: this.state.num + this.state.range
        });
    }

    decrementar = () => {
        this.setState({
            num: this.state.num - this.state.range
        });
    }

    render(){
        return(
        <div className="Contador">
                <Display num={this.state.num}/>
                <Range range={this.state.range} setRange={this.setRange}/>
                <Buttons incrementar={this.incrementar} decrementar={this.decrementar}/>
        </div>
    )}
}

export default Contador