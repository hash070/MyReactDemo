/*
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
*/
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function App() {
  return <h1>App
    <Outlet/>
  </h1>;
}

function Home() {
  return <h1>Home</h1>;
}

function Teams() {
  return <h1>Teams</h1>;
}

function Team() {
  return <h1>Team</h1>;
}

function NewTeamForm() {
  return <h1>NewTeamForm</h1>;
}

function LeagueStandings() {
  return <h1>LeagueStandings</h1>;
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

