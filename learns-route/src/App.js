//创建外壳组件APP
import React, { Component } from "react";
import { NavLink, Link, Route, Switch,Redirect } from "react-router-dom";
// 路由组件
import About from "./pages/About";
import Home from "./pages/Home";
// 一般组件
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";

class App extends Component {
  render() {
    //通过 ...将状态中的全部赋值过去
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item active" href="./about.html">About</a>
                    <a className="list-group-item" href="./home.html">Home</a> */}
              {/* RouteBrowserRouterr:就是利用H5推出的history身上的API
                        HashRouter:就是利用#,也就是锚点 hash值*/}
              {/* 在react中靠路由链接实现组件切换 */}
              {/* <Link className="list-group-item" to="/about">
                  About
                </Link>
                <Link className="list-group-item" to="/home">
                  home
                </Link> */}

              {/*NavLink在点击的时候就会去找activeClassName="ss"所指定的class的值，如果不添加默认是active
                        这是因为Link相当于是把标签写死了，不能去改变什么。*/}
              {/* <NavLink activeClassName="active" className="list-group-item" to="/about">
                About
              </NavLink>
              <NavLink activeClassName="active" className="list-group-item" to="/home">
                Home
              </NavLink> */}

              {/*将NavLink进行封装，成为MyNavLink,通过props进行传参数，标签体内容是props特殊的一个属性，叫做children */}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由，也就是写对应的关系 */}
                <Switch>
                  <Route exact={true} path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  {/* <Route path="/home" component={About} /> */}
                  <Redirect to="/about"/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
