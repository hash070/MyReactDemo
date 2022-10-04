import React, {Component} from 'react';
import {Button, Input} from "antd";
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
            InputText: "",
        }
        //Bind InputChange
        this.InputChange = this.InputChange.bind(this);
    }

    pageSelect() {
        switch (this.state.currentId) {
            case 1:
                return <Component1></Component1>;
            case 2:
                return <Component2></Component2>;
            case 3:
                return <Component3></Component3>;
            default:
                return null;
        }
    }

    InputChange(e) {
        console.log('InputChange Func', e.target.value);
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
                {/*{this.state.currentId=== 1 ? <Component1></Component1> : null}*/}
                {/*{this.state.currentId=== 2 ? <Component2></Component2> : null}*/}
                {/*{this.state.currentId=== 3 ? <Component3></Component3> : null}*/}
                {this.pageSelect()}
                <Input
                    onChange={
                        (e) => {
                            this.InputChange(e);
                            this.setState({
                                InputText: e.target.value,
                            })
                            console.log(e.target.value);
                        }}
                />
            </div>
        )
    }
}

export default ConditionRenderTest;