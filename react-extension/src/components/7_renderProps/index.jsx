import React, { Component } from 'react'
import "./index.css"

export default class parent extends Component {
  render() {
    return (
      <div className="parent">
        <h3>parent..</h3>
        <A render={(n) => <B name = {n}/>}/>
      </div>
    )
  }
}

class A extends Component {
  state ={ name: 'tom'}
  render() {
    const { name } = this.state
    return (
      <div className="a">
        <h3>a</h3>
        {this.props.render(name)}
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className="b">
        <h3>b...{this.props.name}</h3>
      </div>
    )
  }
}
