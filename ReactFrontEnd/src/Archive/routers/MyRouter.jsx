import React, {Component} from 'react';
import {BrowserRouter, HashRouter, Route, Router, Routes} from "react-router-dom";
import {Switch} from "antd";
import MyTimer from "../toys/MyTimer.jsx";
import TodoList from "../toys/TodoList.jsx";

class Authed extends Component {
    render() {
        return (<div>
            Authed
        </div>);
    }
}

class UnAuthored extends Component {
    render() {
        return (
            <div>
                未授权访问
            </div>
        );
    }
}

let isAuthed = () => {
    return true;
}

class MyRouter extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Routes>
                        <Route path={'/home'} element={<MyTimer/>}/>
                        <Route path={'/h1'} element={<TodoList/>}/>
                        <Route path={'/admin'} element={() => {
                            return true ? <Authed/> : <UnAuthored/>
                        }}/>
                    </Routes>
                </HashRouter>
            </div>
        );
    }
}

export default MyRouter;