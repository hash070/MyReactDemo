import React, { Component } from 'react'
import { HashRouter, Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import HelloWorld1 from '../Component/HelloWorld1'
import HelloWorld2 from '../Component/HelloWorld2'
import HelloWorld3 from '../Component/HelloWorld3'
import HelloWorld4 from '../Component/HelloWorld4'
import NotFound from '../Component/NotFound'
import LoginForm from '../views/Login'
import Home from '../views/Home'

export default function MyRouter(props) {


  const isLogin = localStorage.getItem("token") === null ? <Navigate to="/login" /> : <NotFound />;

  let isLogined = () => {
    console.log('shit',!localStorage.getItem("token") === null);
    return localStorage.getItem("token") !== null;
  }

  let isHome = isLogined() ? <Home /> : <Navigate to={'/login'} />
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={'/2'} element={<HelloWorld2 />} >
            <Route path={'3'} element={<HelloWorld3 />} />
            {/* <Route index  element={<HelloWorld4/>}/> */}
            <Route index element={<Navigate to={"3"} />} />
          </Route>

          <Route path='/login' element={<LoginForm />} />
          <Route path='/home' element={isHome} />
          <Route path='/*' element={isLogin} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
