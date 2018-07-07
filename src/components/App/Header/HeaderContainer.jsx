import React, { Component } from "react";
import { connect } from "react-redux";
import SearchView from "../../Search/SearchView";
import Header from "./Header";
import SavedButton from "../Buttons/Saved";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-container container-fluid d-flex justify-content-around mt-4">
        <div className="row row justify-content-start">
          <div className="col-md-8">
            <Header h1=" New York Times Article Search" />
          </div>
          <div className="col-md-4">
            <SearchView />
            <SavedButton />
          </div>
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
