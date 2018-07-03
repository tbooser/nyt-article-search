import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/index.js";
import SearchView from "./SearchView";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      results: null
    };
  }

  render() {
    return (
      <div className="search-container">
        <SearchView />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    app: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      searchActions: bindActionCreators(actions, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
