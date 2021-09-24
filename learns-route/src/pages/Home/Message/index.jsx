import React, { Component } from "react";
import { Link,Route } from "react-router-dom";
import Detail from "./Detail";

class index extends Component {
  state = {
    messages: [
      { id: "01", title: "message1" },
      { id: "02", title: "message2" },
      { id: "03", title: "message3" },
    ],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.messages.map((item) => {
            return (
              <li key={item.id}>
                {/* 向路由组件传递params参数 */}
                <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />
      </div>
    );
  }
}

export default index;
