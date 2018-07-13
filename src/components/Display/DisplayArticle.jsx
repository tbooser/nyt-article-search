import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Moment from "react-moment";
import * as actions from "../../actions/index.js";
import Bookmark from "../App/Buttons/BookmarkIcons/Bookmark";

class DisplayArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.bookmarked
    };

    this.bookmark = this.bookmark.bind(this);
    this.addToSaved = this.addToSaved.bind(this);
    this.removeFromSaved = this.removeFromSaved.bind(this);
  }

  flip() {
    // Flip active state to toggle white/black bookmark icon
    if (this.state.active === false) {
      this.setState({ active: true });
    } else if (this.state.active === true) {
      this.setState({ active: false });
    }
  }

  removeFromSaved() {
    this.props.removeFromSaved(this.props.articleId);
    this.flip();
  }

  addToSaved() {
    this.props.addToSaved(this.props.articleId);
    this.flip();
  }

  favorite() {
    if (this.state.active === true) {
      this.removeFromSaved();
    } else {
      this.addToSaved();
    }
  }

  bookmark() {
    let current = this.state.active;
    return <Bookmark active={current} onClick={this.favorite.bind(this)} />;
  }

  render() {
    return (
      <div className="display-article list-group-item justify-content-start mb-5 p-3">
        {this.bookmark()}
        <h4 className="w-100 m-3">{this.props.headline}</h4>
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
        <h6 className="w-100 m-3 article-date text-info">
          <Moment>{this.props.date}</Moment>
        </h6>
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
