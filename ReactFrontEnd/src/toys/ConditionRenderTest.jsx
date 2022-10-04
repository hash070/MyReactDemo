import React, {Component} from 'react';
import {Button} from "antd";
import Component1 from "./ConditionRenderTest/Component1.jsx";
import Component2 from "./ConditionRenderTest/Component2.jsx";
import Component3 from "./ConditionRenderTest/Component3.jsx";

class ConditionRenderTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id: 1,
                    title: "Bottom1",
                },
                {
                    id: 2,
                    title: "Bottom2",
                },
                {
                    id: 3,
                    title: "Bottom3",
                },
            ],
            currentId: 1,
        }
    }


    render() {
        return (
            <div>
                {
                    this.state.list.map((item) =>
                        (
                            <div key={item.id}>
                                <Button onClick={() => {
                                    this.setState({
                                        currentId: item.id,
                                    })
                                    console.log(item.id);
                                }
                                }>{item.title}+{this.state.currentId}</Button>
                            </div>
                        )
                    )
                }
                {this.state.currentId=== 1 ? <Component1></Component1> : null}
                {this.state.currentId=== 2 ? <Component2></Component2> : null}
                {this.state.currentId=== 3 ? <Component3></Component3> : null}
            </div>
        )
    }
}

export default ConditionRenderTest;