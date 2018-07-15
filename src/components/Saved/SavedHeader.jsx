import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../App/Header/Header";
import HomeButton from "../App/Buttons/Home";

class SavedHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sidebar bg-light">
        <Header h3=" New York Times Article Search" />
        <div className="d-flex justify-content-end">
          <HomeButton />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    app: state
  };
};

export default connect(mapStateToProps)(SavedHeader);
