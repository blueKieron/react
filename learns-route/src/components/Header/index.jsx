import React, { Component } from "react";
import {withRouter} from 'react-router-dom'
class index extends Component {
  back = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.back}>back</button>
      </div>
    );
  }
}
// withRouter可以加工一般组件，让一般组件具备路由组件所特有的api
// 返回值是一个新组件
export default withRouter(index);
