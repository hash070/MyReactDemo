import React, {Component} from 'react';
import {Button, Input} from "antd";

class TodoList extends Component {
    inputTextRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id: 1,
                    title: "Learn Front End",
                },
                {
                    id: 2,
                    title: "Learn React",
                },
                {
                    id: 3,
                    title: "Learn React Naive",
                }
            ],
            listId: 4,
        }
    }

    addTodoItem = (listText) => {
        this.setState({
            list: [...this.state.list, {id: this.state.listId, title: listText}],
            listId: this.state.listId + 1,
        })
    }

    testFunc = () => {
        console.log("testFunc");
        console.log(this.inputTextRef);
    }

    render() {
        return (
            <div>
                <input ref={this.inputTextRef}></input>
                <Button onClick={() => {
                    console.log(this.inputTextRef.current.value);
                    this.addTodoItem(this.inputTextRef.current.value);
                }}>添加选项</Button>
                <ul>
                    {

                        this.state.list.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;