import React, {Component} from 'react';
import {Button} from "antd";

class Child1 extends Component {
    render() {
        return (
            <div>
                Child1:{this.props.text01}
            </div>
        );
    }
}

class PropAndStatus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text01: "text01"
        }
    }


    render() {
        return (
            <div>
                <Button onClick={() => {
                    this.setState({text01: "text01 changed",});
                }}>Hello</Button>
                <Child1 text01={this.state.text01}/>
            </div>
        );
    }
}

export default PropAndStatus;