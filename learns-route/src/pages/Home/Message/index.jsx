import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

class index extends Component {
  state = {
    messages: [
      { id: "01", title: "message1" },
      { id: "02", title: "message2" },
      { id: "03", title: "message3" },
    ],
  };

  pushBtn = (id, title) => {
    // parmas参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)
    // query参数
    // this.props.history.push(`/home/message/detail?id=${id}/${title}`)
    // state参数
    this.props.history.push(`/home/message/detail`, { id, title });
  };
  replaceBtn = (id, title) => {
    // parmas参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)
    // query参数
    //  this.props.history.replace(`/home/message/detail/${id}/${title}`)
    // state参数
    this.props.history.replace(`/home/message/detail`, { id, title });
  };
  back = () => {
    this.props.history.goBack();
  };
  forword = () => {
    this.props.history.goForword();
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.messages.map((item) => {
            return (
              <li key={item.id}>
                {/* 向路由组件传递params参数 */}
                {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link> */}

                {/* 向路由组件传递search参数 */}
                {/* <Link to={`/home/message/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

                {/* 向路由组件传递state参数 */}
                <Link
                  replace
                  to={{
                    pathname: "/home/message/detail",
                    state: { id: item.id, title: item.title },
                  }}
                >
                  {item.title}
                </Link>
                <button onClick={() => this.pushBtn(item.id, item.title)}>
                  push
                </button>
                <button onClick={() => this.replaceBtn(item.id, item.title)}>
                  replace
                </button>
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

        {/* search参数无需声明接受 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}

        {/* state参数无需声明接受 */}
        <Route path="/home/message/detail" component={Detail} />
        <button onClick={this.back}>back</button>
        <button onClick={this.forword}>forword</button>
      </div>
    );
  }
}

export default index;
