import React, {Component} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {Button, DatePicker} from 'antd';
import 'antd/dist/antd.css';
import TodoList from "./toys/TodoList.jsx";
import ConditionRenderTest from "./toys/ConditionRenderTest.jsx";
import PropAndStatus from "./toys/PropAndStatus.jsx";
import ControlledInput from "./toys/ControlledInput.jsx"; // or 'antd/dist/antd.less'
// import App from './App.jsx'

class AppTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            textx: "Hello, world!",
            listTest: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        };
    }


    render() {
        return (
            <div>
                <p onClick={() => {
                    this.setState({textx: "Hello, world!2222"})
                }}>{this.state.textx}</p>

                <ul>
                    {
                        //遍历数组
                        this.state.listTest.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
        <React.StrictMode>
            <BrowserRouter>
                <TodoList/>
            </BrowserRouter>
        </React.StrictMode>
    </div>
)
