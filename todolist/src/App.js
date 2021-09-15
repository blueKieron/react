import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打代码", done: false },
    ],
  };

  addTodo = (todo) => {
    this.setState({ todos: [todo, ...this.state.todos] });
  };

  updateTodo = (id, done) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) return { ...todo, done };
        return todo;
      }),
    });
  };
  deleteTodo = (id) => {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  };
  checkAll = (done) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        return { ...todo, done };
      }),
    });
  };
  clearAllDone = () => {
    this.setState({todos: this.state.todos.filter(todo => !todo.done)})
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={this.state.todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer todos={this.state.todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    );
  }
}
