import React, {Component} from 'react';
import {Button, Input} from "antd";

class TodoList extends Component {
    inputTextRef = React.createRef();
    isEmpity=false;

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
                    this.inputTextRef.current.value="";
                }}>添加选项</Button>
                <ul>
                    {
                        this.state.list.map((item) => (
                            <div key={item.id}>
                                <li>{item.title}</li>
                                <Button onClick={()=>{
                                    this.setState({
                                        list: this.state.list.filter((item2)=>item2.id!==item.id)
                                        /**
                                         * List filter
                                         * filter会创建一个新数组，而不会修改旧数组，因此不会触犯React的不可变性规则
                                         * 它返回一个新数组，其中包含所有通过测试条件的元素
                                         */
                                    })
                                }}>删除</Button>
                            </div>
                        ))
                    }
                    {/*条件渲染*/}
                    {/*方法一：三目运算符*/}
                    {this.state.list.length===0?<div>暂无代办事项</div>:null}
                    {/*方法二：与(&&)*/}
                    {this.state.list.length===0&&<div>暂无代办事项</div>}

                {/*
                如何在组件中直接渲染HTML标签：
                 <div dangerouslySetInnerHTML={
                      {__html: item.title}
                 }></div>
                */}
                </ul>
            </div>
        );
    }
}

export default TodoList;