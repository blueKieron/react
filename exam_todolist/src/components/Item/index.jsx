import React, { Component } from "react";
import './index.css'
class index extends Component {
  state ={ mouse: false}
  handleMouse= flag => {
    return () => {
      this.setState({mouse: flag})
    }
  }
  handleChange = (id) => {
    return (e) => {
      this.props.updateTodo(id,e.target.checked)
    }
  }
  handleDelete = (id) => {
    if(window.confirm('确定删除吗')) this.props.deleteTodo(id)
    return
  }
  render() {
    const { id,name,done} = this.props
    const { mouse } =this.state
    return (
      <li style={{background:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleChange(id)}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouse ? "block" : "none" }} onClick={() => this.handleDelete(id)}>
          删除
        </button>
      </li>
    );
  }
}

export default index;
