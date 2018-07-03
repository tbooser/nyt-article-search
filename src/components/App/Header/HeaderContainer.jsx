import React, { Component } from "react";
import SearchView from "../../Search/SearchView";
import Header from "./Header";

export default class HeaderContainer extends Component {
  render() {
    return (
      <div className="header-container container-fluid d-flex justify-content-around mt-4">
        <div className="row row justify-content-start">
          <div className="col-md-8">
            <Header h1=" New York Times Article Search" />
          </div>
          <div className="col-md-4">
            <SearchView />
          </div>
        </div>
      </div>
    );
  }
}
