import React, { Component } from "react";
// 引入store，用于获取redux中保存的状态
// import store from '../../redux/store'
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action'
class index extends Component {
  state = { };

  incrment = () => {
    const { value } = this.selectNumber;
    this.props.add(value*1)
  };
  decrment = () => {
    const { value } = this.selectNumber;
    this.props.sub(value*1)
  };
  incrmentIfOdd = () => {
    const { value } = this.selectNumber;
    if(this.props.count % 2 !== 0) this.props.add(value*1)
  };
  incrmentAsync = () => {
    const { value } = this.selectNumber;
    this.props.addAsync(value*1,500)
  };
  render() {
    return (
      <div>
        <h2>total: {this.props.count}</h2>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.incrment}>+</button>&nbsp;
        <button onClick={this.decrment}>-</button>&nbsp;
        <button onClick={this.incrmentIfOdd}>incremnet if odd</button>&nbsp;
        <button onClick={this.incrmentAsync}>increment async</button>
      </div>
    );
  }
}

export default index;
