# What is React-Router?

许多现代网站实际上是由一个页面组成的，它们只是看起来像多个页面，因为它们包含像独立页面一样渲染的组件。这些通常被称为 SPA--单页应用程序。在其核心部分，React Router 所做的是根据 URL 中使用的路由（/ 代表主页，/about 代表关于页面，等等），有条件地渲染某些组件来显示。

For exp, React Router make www.hash070.top/ connected to www.hash070.top/about or www.hash070.top/archive。

# Sounds great! How can I get started?

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

That's how to fast start with React Router.

# Further Study

## Configure your Router

For Exp

```jsx
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function App() {
  return (

    <div>
      <Outlet />
      <h1>App
      </h1>
    </div>

  )


}

function Home() {
  return <h1>Home</h1>;
}

function Teams() {
  return <h1>Teams<Outlet /></h1>;
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

function NotFound404() {
  return 404;
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<NotFound404 />} />
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
Tips:

<Route path="/*" element={<NotFound404 />} />
<Route path="teams/:teamId" element={<Team />} />
<Route path="teams/new" element={<NewTeamForm />} />

line1 is a wildcard route, it will match any path expect root path ("/") (maybe can be used to show 404 page.

Router `teams/new` will match both `teams/new` at line2 and  `teams/:teamId` at line3, but the line3 is more accurate, so v6 router will choose line2.

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

# Router Args

We can use `:style` to send args to router, and use `useParams()` func to get args.

For Exp

```jsx
import { Routes, Route, useParams } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="invoices/:invoiceId"
        element={<Invoice />}
      />
    </Routes>
  );
}

function Invoice() {
  let params = useParams();
  return <h1>Invoice {params.invoiceId}</h1>;
}
```

Another Exp, use router args to fetch async data.

```jsx
function Invoice() {
  let { invoiceId } = useParams();
  // useFakeFetch() func can be reguraded as a async request
  let invoice = useFakeFetch(`/api/invoices/${invoiceId}`);
  return invoice ? (
    <div>
      <h1>{invoice.customerName}</h1>
    </div>
  ) : (
    <Loading />
  );
}
```

# Nested Router

Router nesting is a powerful feature of React Router. It's helpful to reduce the complexity of your code and the difficuty of layout design.

For Exp:

```jsx
function App() {
  return (
    <Routes>
      <Route path="invoices" element={<Invoices />}>
        <Route path=":invoiceId" element={<Invoice />} />
        <Route path="sent" element={<SentInvoices />} />
      </Route>
    </Routes>
  );
}

/*
Now Router can match the following path:

/invoices => <Invoices />
/invoices/:invoiceId => Send arg invoiceId to =>  <Invoice />
/invoices/sent => <SentInvoices />
*/
```

# Outlet

`Outlet` is a component that can render the child router, which make it esaier to reuse your component.

For Exp:

```jsx
import {
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="invoices" element={<Invoices />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="invoices">Invoices</Link> | {" "}
        <Link to="dashboard">Dashboard</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function Invoices() {
  return <h1>Invoices</h1>;
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}
```

# Default Router

When one router contains multiple child router, when the requested url matchs the father router, then how the child router be rendered?

In this case, we can use `index` to set the default router that can be render defaultly.

For Exp:

```jsx
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Activity />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="activity" element={<Activity />} />
      </Route>
    </Routes>
  );
}
```

When you added `index` to the router, it will defaultly render this router's component.

`Index Router` can be decleared in any level of the router tree.

# Link in Nested Router

```jsx
...
// <Dashboard />
<nav>
    <Link to="invoices">Invoices</Link>{" "}
    <Link to="team">Team</Link>
</nav>
...
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="dashboard" element={<Dashboard />}>
        <Route path="invoices" element={<Invoices />} />
        <Route path="team" element={<Team />} />
    </Route>
</Routes>
```
In this case, the two `Link` component will route the url to `/dashboard/invoices` and `/dashboard/team`, this is the relative router.

# 404 Router

When there is no router match the requested url, router will find wether the default router `path=*` is exist, which will match **any pattern** of url with **lowest priority**.

```jsx
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```

# Multi Router Group

The router group are wraped in a `Routes` component, you can define multiple router group in router v6.

Each Routes are independent.

```jsx
function App() {
  return (
    <div>
      <Sidebar>
        <Routes>
          <Route path="/" element={<MainNav />} />
          <Route
            path="dashboard"
            element={<DashboardNav />}
          />
        </Routes>
      </Sidebar>

      <MainContent>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="support" element={<Support />} />
          </Route>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="invoices" element={<Invoices />} />
            <Route path="team" element={<Team />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainContent>
    </div>
  );
}
```
## Tips

When child router needs routes component, then you need to add `/*` in it's father router, the number of `*` you need to add depends on the level of your child router.

# History

history.push

# Dynamic Router

```jsx
function App() {
  return (
    <Routes>
      <Route path="invoices" element={<Invoices />}>
        <Route path=":invoiceId" element={<Invoice />} />
        <Route path="sent" element={<SentInvoices />} />
      </Route>
    </Routes>
  );
}

//:invoiceId is a dynamic router

//可以用props来在组件中拿到这个ID

porps.match.params.invoiceId
```

## 动态路由参数传递

### 方法一：动态路由传参(推荐)

#### 发送

```jsx
history.push('/detail/${id}')
```

#### 接收

```jsx
porps.match.params.invoiceId
```

### 方法二：query传参(链接不能share)

#### 发送

```jsx
history.push({pathname:'/detail',query:{myid:id}})
```

#### 接收

```jsx
porps.location.query.myid
```

### 方法三：state传参(链接不能share)

#### 发送

```jsx
history.push({pathname:'/detail',state:{myid:id}})
```

#### 接收

```jsx
porps.location.state.myid
```

# 路由拦截

```jsx
                <BrowserRouter>
                    <Routes>
                        <Route path={'/home'} element={<MyTimer/>} />
                        <Route path={'/h1'} element={<TodoList/>} />
                    </Routes>
                </BrowserRouter>
```