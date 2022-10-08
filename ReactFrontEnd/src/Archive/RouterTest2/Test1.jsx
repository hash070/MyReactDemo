import React, { Component } from 'react'
import { Route, Routes } from 'react-router'
import Test2 from './Test2'

export default class Test1 extends Component {
  render() {
    return (
      <div>
        <p>This is test1</p>
        <Routes>
            <Route path={'/xx'} Component={<Test2/>}/>
        </Routes>
      </div>
    )
  }
}