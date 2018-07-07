import React, { Component } from "react";

export class SavedView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>{this.props.headline}</div>;
  }
}

export default SavedView;
