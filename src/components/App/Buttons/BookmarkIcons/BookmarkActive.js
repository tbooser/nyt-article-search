import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../../actions/index.js";

class BookmarkActive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };

    this.saveArticle = this.saveArticle.bind(this);
  }

  saveArticle() {
    this.props.click(this.props);
    console.log("hello");
  }

  render() {
    return (
      <i
        className="fas fa-bookmark d-flex justify-content-end"
        onClick={this.saveArticle}
      />
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
      saveActions: bindActionCreators(actions, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkActive);
