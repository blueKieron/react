import React, { Component } from "react";
// import Count from "./components/Count";
import Count from "./containers/Count";
import Person from "./containers/Person";
// 引入store
// import store from './redux/store'
export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
        <br/>
        <br/>
        <Person />
      </div>
    );
  }
}
