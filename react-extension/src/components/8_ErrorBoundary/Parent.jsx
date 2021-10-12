import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  state = {
    hasError: "", //用于标示子组件是否产生错误
  };
  // 当Parent的子组件出现报错时，会触发getDerivedStateFromError调用，并携带错误信息
  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: error };
  }
  render() {
    return (
      <div>
        <h2>parent..</h2>
        {this.state.hasError ? <h2>error..</h2> : <Child />}
      </div>
    );
  }
}
