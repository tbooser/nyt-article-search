import React, { Component } from "react";
import { connect } from "react-redux";
import SearchView from "../../Search/SearchView";
import Sidebar from "./Sidebar";
import SavedButton from "../Buttons/SavedButton";
import HomeButton from "../Buttons/Home";

class SidebarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sidebar bg-light">
        <HomeButton />
        <Sidebar h5={this.props.title} />
        <div className="sidebar-item-container">
          <div className="sidebar-item">
            <SearchView />
          </div>
          <div className="d-flex sidebar-item">
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

export default connect(mapStateToProps)(SidebarContainer);
