import {React, Fragment} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import AdminPaneLayout from './views/AdminPane';
import Favicon from 'react-favicon';
// import './App.css'
//引入Home
import Home from './views/Home.jsx'
import LoginForm from './views/Login.jsx'
import RegisterForm from "./views/Register.jsx";
import MyTimer from "./toys/MyTimer.jsx";

const App = () => {
    return (
        <div className="App">
            <Favicon url="/src/assets/favicon.ico"/>
            <Routes>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/admin" element={<AdminPaneLayout/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/register" element={<RegisterForm/>}/>
                <Route path="/" element={<MyTimer/>}/>
            </Routes>
        </div>
    );
}

export default App;