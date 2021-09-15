import React, { Component } from "react";
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

class index extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  handleKeyUp = e => {
    if (e.keyCode !== 13) return
    if (e.target.value.trim() === '') {
      alert('输入不能为空')
      return
    }
    // console.log(e.target.value)
    this.props.addTodo({id: nanoid(),name: e.target.value,done: false})
    e.target.value= ''
  }
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车确认"></input>
      </div>
    );
  }
}

export default index;
