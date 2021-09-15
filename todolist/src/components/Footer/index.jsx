import React, { Component } from "react";
import "./index.css";

class index extends Component {
  handleCheckAll = (e) => {
    this.props.checkAll(e.target.checked)
  }
  handleClear = () => {
    this.props.clearAllDone()
  }
  render() {
    const { todos } = this.props;
    const dones = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={total !== 0 && dones === total} onChange={this.handleCheckAll}></input>
        </label>
        <span>
          <span>已完成{dones}</span>/ 全部{total}
        </span>
        <button onClick={this.handleClear} className="btn btn-danger">清除</button>
      </div>
    );
  }
}

export default index;
