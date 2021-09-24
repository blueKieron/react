import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class index extends Component {
  render() {
    return (
      <NavLink activeClassName="active" className="list-group-item" {...this.props} />
    );
  }
}

export default index;
