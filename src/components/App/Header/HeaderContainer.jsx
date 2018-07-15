import React, { Component } from "react";
import { connect } from "react-redux";
import SearchView from "../../Search/SearchView";
import Header from "./Header";
import SavedButton from "../Buttons/SavedButton";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sidebar bg-light">
        <Header h3=" New York Times Article Search" />
        <div>
          <SearchView />
        </div>
        <div className="d-flex justify-content-end">
          <SavedButton />
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

export default connect(mapStateToProps)(HeaderContainer);
