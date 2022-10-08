import React, { Component } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Test1 from './Test1'

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/list/*'} element={<Test1/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}
