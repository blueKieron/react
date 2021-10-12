import React, { Component,PureComponent } from 'react'
import './index.css'

export default class parent extends PureComponent {
  state = {carName: 'benz c63'}
  change = () => {
    this.setState({carName: 'benz amg c63'})
  }

  // shouldComponentUpdate(nextProps,nextState) {
  //   return !this.state.carName === nextState.carName
  // }
  render() {
    const { carName} = this.state
    return (
      <div className="parent">
        <h3>parent...</h3>
        <span>carName: {carName}</span>
        <button onClick={this.change}>change</button>
        <Child carName={carName}></Child>
      </div>
    )
  }
}

class Child extends PureComponent {
  // shouldComponentUpdate(nextProps,nextState) {
  //   return !this.props.carName === nextProps.carName
  // }
  render() {
    return (
      <div className="child">
        <h3>child...</h3>
        <span>props.carName:{this.props.carName}</span>
      </div>
    )
  }
}