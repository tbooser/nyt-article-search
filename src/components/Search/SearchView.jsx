import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as articleActions from "../../actions/index.js";

class SearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchClicked: false
    };

    this.flipSearchBoxState = this.flipSearchBoxState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showSearchBox = this.showSearchBox.bind(this);
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  flipSearchBoxState() {
    if (this.state.searchClicked === false) {
      this.setState({ searchClicked: true });
    } else {
      this.setState({ searchClicked: false });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    this.props.actions.articleActions.articleSearch(this.state.searchTerm);
    this.setState({ searchTerm: "" });
  }

  showSearchBox() {
    if (this.state.searchClicked === true) {
      return (
        <form className='search-form' onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              placeholder="Find an article"
              aria-label="Find an article"
              aria-describedby="basic-addon2"
              value={this.state.searchTerm}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-primary" type="button">
                Search
              </button>
            </div>
          </div>
        </form>
      );
    }
  }

  render() {
    return (
      <div className="search-input-container">
        <i className="fas fa-search" onClick={this.flipSearchBoxState} />
        {this.showSearchBox()}
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
      articleActions: bindActionCreators(articleActions, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
