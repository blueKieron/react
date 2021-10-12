import React, { Component } from "react";
import "./index.css";

// 创建Context对象
const UserContext = React.createContext();
export default class A extends Component {
  state = { username: "tom", age: 18 };
  render() {
    const { username, age } = this.state;
    return (
      <div className="parent">
        <h3>A component</h3>
        <h4>username: {username}</h4>
        <UserContext.Provider value={{ username, age }}>
          <B />
        </UserContext.Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="child">
        <h3>B component</h3>
        <C />
      </div>
    );
  }
}

// class C extends Component {
//   // 声明接收context
//   contextType = UserContext;
//   render() {
//     console.log(this.context);
//     return (
//       <div className="grand">
//         <h3>C component</h3>
//         <h4>username from A: {this.context.username}</h4>
//       </div>
//     );
//   }
// }

function C() {
  return (
    <div className="grand">
      <h3>C component</h3>
      <UserContext.Consumer>
        {
          value => {
            return 'username from A: '+ value.username
          }
        }
      </UserContext.Consumer>
    </div>
  );
}
