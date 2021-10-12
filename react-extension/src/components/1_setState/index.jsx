import React, { Component } from 'react'

export default class index extends Component {
  state ={count:0}
  add =() => {
    const {count} =this.state
    //更新状态 对象式
    this.setState({count: count +1}, () => {
      console.log(this.state.count)
    })
    console.log(this.state.count)

    // 函数式setState
    this.setState((state,props) => {
      return {count: state.count +1}
    })
  }
  render() {
    return (
      <div>
        <h2>total:{this.state.count}</h2>
        <button onClick={this.add}>+1</button>
      </div>
    )
  }
}
