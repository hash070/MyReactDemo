# What is React-Router?

许多现代网站实际上是由一个页面组成的，它们只是看起来像多个页面，因为它们包含像独立页面一样渲染的组件。这些通常被称为 SPA--单页应用程序。在其核心部分，React Router 所做的是根据 URL 中使用的路由（/ 代表主页，/about 代表关于页面，等等），有条件地渲染某些组件来显示。

For exp, React Router make www.hash070.top/ connected to www.hash070.top/about or www.hash070.top/archive。

# Sounds great! How do I get started?

## Install it

```bash
# npm
npm install react-router-dom

# yarn
yarn add react-router-dom
```

## Use it

### Warp your App

After you created your React app, just use `<BrowserRouter>` Or `<HashRouter>` to wrap your app is ok.

```jsx
import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

### Use Router in your App

Then you can use router in your code.

```jsx
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
```

That's how to fast start to use React Router.

# Further Study

## Configure your Router

For exp

```jsx
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too

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

/*
base: `/`

index to `<Home />`

`/teams` to `<Teams />`

`/teams/new` to `<NewTeamForm />`

*/

/*
Tips:

<Route path="teams/:teamId" element={<Team />} />
<Route path="teams/new" element={<NewTeamForm />} />

Router `teams/new` will match both `teams/new` at line1 and  `teams/:teamId` at line2, but the line2 is more accurate, so v6 router will choose line2.

*/
```



## Router Jump

You can use `Link` Tag to change the url, or use `useNavigate` hook to make url jump with code.

### Jump with Link

```jsx

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
      </nav>
    </div>
  );
}
```

### Jump with code

```jsx
import { useNavigate } from "react-router-dom";

function Invoices() {
  let navigate = useNavigate();
  return (
    <div>
      <NewInvoiceForm
        onSubmit={async (event) => {
          let newInvoice = await createInvoice(
            event.target
          );
          navigate(`/invoices/${newInvoice.id}`);
        }}
      />
    </div>
  );
}
```