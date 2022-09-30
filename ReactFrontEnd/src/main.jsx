import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button, DatePicker } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Login from './App.jsx'
import './css.css'


const App = () => (
  <>
    <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" />
  </>
);

//new Component
function App() {
  return <h1>Hello</h1>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="FormTest">
    <Login />
  </div>
)
