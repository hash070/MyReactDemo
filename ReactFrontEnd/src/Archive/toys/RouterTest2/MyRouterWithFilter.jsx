import React, {Component} from 'react';
import {BrowserRouter, Navigate, Outlet, Route, Router, Routes} from "react-router-dom";
import RouteHeader from "./RouteHeader.jsx";
import RouterMap from "./RouterMap.js";
import NotFound from "./NotFound.jsx";
import HooksTest from "../HooksTest.jsx";
import MyTimer from "../MyTimer.jsx";
import TodoList from "../TodoList.jsx";

//注意：Switch已经被废弃，使用Routes替代
//注意：Redirect已被删除，使用Navigate替代
//For react-router-dom v6, simply replace Redirect with Navigate

function RequireAuth({children}) {
    const authed = localStorage.getItem('login')

    return authed === 'true' ? ( // 判断 localstorage 中登录状态是否为 true
        children
    ) : (
        <Navigate to="/login" replace/> // 跳转到登录
    );
}
class HelloWorld0 extends Component {
    render() {
        return (
            <div>
                HelloWorld0
                <Outlet></Outlet>
            </div>
        );
    }
}
//注意这里的Outlet
//https://www.cnblogs.com/wuyz-harder/p/16418410.html
//React提供了Outlet组件，将其用于父组件中可以为子路由的元素占位，并最终渲染子路由的元素。

class HelloWorld1 extends Component {
    render() {
        return (
            <div>
                HelloWorld1
            </div>
        );
    }
}
class HelloWorld2 extends Component {
    render() {
        return (
            <div>
                HelloWorld2
            </div>
        );
    }
}


class MyRouterWithFilter extends Component {
    render() {
        return (
            <BrowserRouter>
                <RouteHeader></RouteHeader>
                <Routes>
                    <Route path={'a'} element={<HelloWorld0/>}>
                        <Route index={true} element={<HelloWorld1/>}/>
                        <Route path={'timer'} element={<HelloWorld2/>}/>
                        <Route path={'todo'} element={
                            <RequireAuth>
                                <TodoList/>
                            </RequireAuth>
                        }/>
                    </Route>
                    <Route path={'/h'} element={<HelloWorld2/>}/>
                    //404路由
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}
//Route 的 index
//Index Route - A child route with no path that renders in the parent's outlet at the parent's URL.

export default MyRouterWithFilter;

/*
{RouterMap.map((item, index) => {
    return <Route key={index} path={item.path} element={props =>
        (!item.auth ? (<item.component {...props} />) : (token ? <item.component {...props} /> :
                <Navigate to={{
                    pathname: '/404',
                    state: {from: props.location}
                }}/>)
        )}/>
})}
*/