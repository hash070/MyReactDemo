import React, {Component} from 'react';
import ReactDOM from "react-dom/client";
import { Outlet } from 'react-router';
import MyRouter from './Router/MyRouter';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
// import MyRouter from './Archive/routers/MyRouter';

class Main extends Component {
    render() {
        return (
            <div>
                HelloWorld
            </div>
        );
    }
}

let root= ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <div>
        <MyRouter/>
    </div>
)