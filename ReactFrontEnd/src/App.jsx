import {React,Fragment} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import AdminPaneLayout from './views/AdminPane';
import Favicon from 'react-favicon';
// import './App.css'
//引入Home
import Home from './views/Home.jsx'
import LoginForm from './views/Login.jsx'

const App = () => {
  return (
    <div className="App">
      <Favicon url="/src/assets/favicon.ico"/>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/admin" element={<AdminPaneLayout />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;