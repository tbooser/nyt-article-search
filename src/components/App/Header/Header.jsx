import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header ">
        <h3>{this.props.h3}</h3>
      </div>
    );
  }
}
