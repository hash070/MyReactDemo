import React, {Component} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import {Button, DatePicker} from 'antd';
import 'antd/dist/antd.css';
import TodoList from "./toys/TodoList.jsx";

import ConditionRenderTest from "./toys/ConditionRenderTest.jsx";
import PropAndStatus from "./toys/PropAndStatus.jsx";
import ControlledInput from "./toys/ControlledInput.jsx";
import HooksTest from "./toys/HooksTest.jsx";
import TodoListFunc from "./toys/TodoListFunc.jsx";
import MyRouter from "./routers/MyRouter.jsx";
import MyRouterWithFilter from "./toys/RouterTest2/MyRouterWithFilter.jsx";
import NotFound from "./toys/RouterTest2/NotFound.jsx"; // or 'antd/dist/antd.less'
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
class Root extends Component {
    render() {
        return (
            <div>
                Root
            </div>
        );
    }
}

class Dashboard extends Component {
    render() {
        return (
            <div>
                Dashboard
            </div>
        );
    }
}

class About extends Component {
    render() {
        return (
            <div>
                About
            </div>
        );
    }
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "about",
                element: <About />,
            },
        ],
    },
]);

class BigSpinner extends Component {
    render() {
        return (
            <div>
                BigSpinner
            </div>
        );
    }
}
/*
            <RouterProvider
                router={router}
                fallbackElement={<BigSpinner />}
                errorElement={<NotFound/>}
            />
* */

ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
        <React.StrictMode>
            <MyRouterWithFilter/>
        </React.StrictMode>
    </div>
)
