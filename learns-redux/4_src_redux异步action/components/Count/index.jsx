import React, { Component } from "react";
// 引入store，用于获取redux中保存的状态
import store from '../../redux/store'
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action'
class index extends Component {
  state = { };

  componentDidMount(){
    // 检测redux中状态的变化，变化后调用render
    store.subscribe(() => {
      this.setState({})
    })
  }

  incrment = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAction(value*1))
  };
  decrment = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDecrementAction(value*1))
  };
  incrmentIfOdd = () => {
    const { value } = this.selectNumber;
    const count  = store.getState();
    if (count % 2 !== 0){
      store.dispatch(createIncrementAction(Number(value)))
    }
  };
  incrmentAsync = () => {
    const { value } = this.selectNumber;
    // setTimeout(() => {
      store.dispatch(createIncrementAsyncAction(value*1,500))
    // }, 500);
  };
  render() {
    return (
      <div>
        <h2>total: {store.getState()}</h2>
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
