import React, { Component } from "react";
import qs from 'querystring'

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
    // const { id, title } = this.props.match.params;

    // 接收search参数
    // const {search} = this.props.location
    // const {id,title} = qs.parse(search.slice(1))

    // 接收state参数
    const {id,title} = this.props.location.state || {}
    
    const res = data.find((item) => item.id === id) || {};
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
