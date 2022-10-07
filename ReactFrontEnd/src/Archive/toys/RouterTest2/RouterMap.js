import MyTimer from "../MyTimer.jsx";
import TodoList from "../TodoList.jsx";
import TodoListFunc from "../TodoListFunc.jsx";
import ControlledInput from "../ControlledInput.jsx";
import NotFound from "./NotFound.jsx";
import Login from "./Login.jsx"
import HooksTest from "../HooksTest.jsx";

export default [
    {path: '/', name: "App",Component: MyTimer},
    {path: '/todo', name: "Todo",Component: TodoList},
    //注意：函数式组件不能直接写出来，除非你想直接执行这个函数
    //应该用括号括起来
    {path: '/ctrl', name: "Ctrl",Component: ControlledInput,auth: true},//auth: true表示需要登录
    {path: '/404', name: "404NotFound",Component: NotFound},
    {path: '/login', name: "Login",Component: Login},
]

/*
  <Switch>
    {Routers.map((item, index) => {
    //Render改为Element
      return <Route key={index} path={item.path} exact render={props =>
        (!item.auth ? (<item.component {...props} />) : (token ? <item.component {...props} /> : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />)
        )} />
    })}
    // 所有错误路由跳转页面
    <Route component={NotFound} />
  </Switch>

  <Routes>
    {RouterMap.map((item, index) => {
      return <Route key={index} path={item.path} element={props =>
        (!item.auth ? (<item.component {...props} />) : (token ? <item.component {...props} /> :
        <Navigate to={{
          pathname: '/login',
          state: { from: props.location }
        }} />)
        )} />
    })}
    // 所有错误路由跳转页面
    <Route component={NotFound} />
  </Routes>
* */