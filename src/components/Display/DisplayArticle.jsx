import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Moment from "react-moment";
// import DisplayModal from "./Modal";
import * as actions from "../../actions/index.js";

class DisplayArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.saveArticle = this.saveArticle.bind(this);
  }

  saveArticle() {
    this.props.onClick(this.props);
  }

  bookmarkHoverState() {
    console.log("enter");
    console.log(this);
    return (this.className = null);
    // return <i className="fa fa-bookmark" aria-hidden="true" />;
  }

  render() {
    return (
      <div className="display-article list-group-item justify-content-start mb-5 p-3">
        <i
          className="far fa-bookmark d-flex justify-content-end"
          onClick={this.saveArticle}
          onMouseEnter={this.bookmarkHoverState.bind(this)}
        />
        <h4 className="w-100 m-3">{this.props.headline}</h4>
        <h6 className="w-100 m-3 article-date text-primary">
          <Moment>{this.props.date}</Moment>
        </h6>
        <div className="w-100 m-3">{this.props.snippet}</div>
        <h5 className="w-100 m-3">
          <a
            href={this.props.url}
            target="_blank"
            className="badge badge-warning"
          >
            <i className="fas fa-glasses" />
          </a>
        </h5>
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
      saveActions: bindActionCreators(actions, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayArticle);
