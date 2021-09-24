import React, { Component } from "react";

const data = [
  {
    id: "01",
    content: "nihao1",
  },
  {
    id: "02",
    content: "nihao1,xxx",
  },
  {
    id: "03",
    content: "nihao,lll",
  },
];
class index extends Component {
  render() {
      console.log(this.props)
    // 接收params参数
    const { id, title } = this.props.match.params;
    const res = data.find((item) => item.id === id);
    return (
      <ul>
        <li>Id:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{res.content}</li>
      </ul>
    );
  }
}

export default index;
