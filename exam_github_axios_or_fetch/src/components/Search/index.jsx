import React, { Component } from "react";
import axios from "axios";

class index extends Component {
  search = () => {
    const {
      KeyValue: { value: KeyWord },
    } = this;

    this.props.updateAppState({
      isFirst: false,
      isLoading: true,
    });
    // axios
    // axios.get(`https://api.github.com/search/users?q=${KeyWord}`).then(
    //   (res) => {
    //     console.log(res.data);
    //     this.props.updateAppState({isLoading: false, users: res.data.items});
    //   },
    //   (err) => {this.props.updateAppState({isLoading: false, err: err.message})}
    // );

    // fetch
    fetch(`https://api.github.com/search/users?q=${KeyWord}`)
      .then(
        (res) => {
          console.log("联系服务器成功", res);
          return res.json();
        }
        // (err) => {
        //   console.log("联系服务器失败", err);
        //   return new Promise(() => {})
        // }
      )
      .then(
        (data) => {
          console.log("获取数据成功了", data);
        }
        // (err) => {
        //   console.log(err);
        // }
      )
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索GitHub用户</h3>
        <div>
          {/*使用ref拿到输入的数据，ref中使用回调函数的形式，在实例对象中创建一个KeyValue的属性，值是该节点*/}
          <input
            ref={(c) => (this.KeyValue = c)}
            type="text"
            placeholder="输入关键词进行搜索"
          />
          &nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}

export default index;
