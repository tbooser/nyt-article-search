import React, { Component } from "react";
import HomeButton from "../App/Buttons/Home";

export default class SavedHeader extends Component {
  render() {
    return (
      <div>
        <HomeButton />
        <div className="saved-header d-flex justify-content-center">
          <h1>{this.props.title}</h1>
        </div>
      </div>
    );
  }
}
