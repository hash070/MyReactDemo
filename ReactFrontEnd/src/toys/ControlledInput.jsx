import React, {Component} from 'react';
import {Button} from "antd";

class ControlledInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: "Hello, world!",
            testx: this.props.testx,
        }
    }


    render() {
        return (
            //在React中更推荐使用受控组件，因为其功能性更强大。
            <div>
                <input type="text" value={this.props.inputValue} onChange={(event)=>{
                    console.log(event.target.value)
                    this.setState({inputValue:event.target.value})
                }}/>
                <Button >{this.props.textx} </Button>
            </div>
        );
    }
}

export default ControlledInput;