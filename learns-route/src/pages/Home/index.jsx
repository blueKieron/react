import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import MyNavLink from "../../components/MyNavLink";
import Message from "./Message";
import News from "./News";

class index extends Component {
  render() {
    return (
      <div>
        <h3>home</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={News}></Route>
            <Route path="/home/Message" component={Message}></Route>
            <Redirect to="/home/news"/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default index;
