//创建外壳组件APP
import React, { Component,lazy,Suspense } from "react";
import { NavLink, Route } from "react-router-dom";

// import About from "./About";
// import Home from "./Home";
const About = lazy(() => import('./About'))
const Home = lazy(() => import('./Home'))

class index extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/about">
                About
              </NavLink>
              <NavLink className="list-group-item" to="/home">
                home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Suspense fallback={<h2>loading...</h2>}>
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                </Suspense>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
