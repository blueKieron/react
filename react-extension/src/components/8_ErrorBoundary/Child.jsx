import React, { Component } from 'react'

export default class Parent extends Component {
  state ={
    users: ''
  }
  componentDidCatch(){
    // 统计错误次数，反馈给服务器，用于通知编码人员进行bug的解决
  }
  render() {
    return (
      <div>
        <h2>child..</h2>
        {this.state.users.map(o => <h4>{o.name}</h4>)}
      </div>
    )
  }
}
