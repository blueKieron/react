// 引入Count的UI组件
// import CountUI from "../../components/Count";
import React, { Component } from "react";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/actions/count";
// 引入store
import store from "../../redux/store";
// 引入connect用于连接ui组件与redux
import { connect } from "react-redux";


// 定义ui组件
class CountUI extends Component {
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
        <h2>人数：{this.props.persons.length}</h2>
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



// 映射状态
const mapStateToProps = (state) => ({ count: state.count, persons: state.persons });

// 创建Count的容器组件
const CountContainer = connect(
  mapStateToProps,
  {
    add:createIncrementAction,
    sub:createDecrementAction,
    addAsync:createIncrementAsyncAction,
  }
)(CountUI);
export default CountContainer;
