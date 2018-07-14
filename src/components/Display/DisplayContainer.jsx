import React, { Component } from "react";
import DisplayArticle from "./DisplayArticle";
// import DisplayModal from "./Modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as displayActions from "../../actions/index.js";

class DisplayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
    this.renderArticles = this.renderArticles.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
    this.checkForBookmarkMatch = this.checkForBookmarkMatch.bind(this);
    this.showSearchTermAndNumberOfResults = this.showSearchTermAndNumberOfResults.bind(
      this
    );
  }

  saveArticle(article, articleId) {
    this.props.actions.actions.saveArticle(article, articleId);
  }

  removeArticle(article, articleId) {
    this.props.actions.actions.unsaveArticle(article, articleId);
  }

  checkForBookmarkMatch(articleId) {
    let bookmarks = this.props.app.bookmarks.bookmarks;
    let bookmarked = false;
    bookmarks.forEach(item => {
      if (item.id === articleId) {
        bookmarked = true;
      }
    });
    return bookmarked;
  }

  renderArticles() {
    if (this.props.app.articles.articles.length > 0) {
      let currentIndex = this.props.app.articles.articles.length - 1;
      let currentArticles = this.props.app.articles.articles[currentIndex]
        .articles.response.docs;

      return currentArticles.map((article, index) => {
        let articleId = article._id;
        let bookmarkStatus = this.checkForBookmarkMatch(articleId);
        if (article.document_type === "article") {
          return (
            <DisplayArticle
              key={index}
              articleId={article._id}
              snippet={article.snippet}
              headline={article.headline.main}
              url={article.web_url}
              date={article.pub_date}
              addToSaved={() => this.saveArticle(article, articleId)}
              removeFromSaved={() => this.removeArticle(article, articleId)}
              bookmarked={bookmarkStatus}
            />
          );
        } else {
          return;
        }
      });
    }
  }

  showSearchTermAndNumberOfResults() {
    if (this.props.app.currentSearchTerm.terms.length > 0) {
      let currentIndex = this.props.app.currentSearchTerm.terms.length - 1;
      let hits = this.props.app.articles.articles[currentIndex].articles
        .response.meta.hits;
      let term = this.props.app.currentSearchTerm.terms[currentIndex].terms;
      return (
        <div>
          <h4>
            <span className="badge badge-success">
              {hits} results found for "{term}"
            </span>
          </h4>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="container display-container mt-4 list-group">
          <h4>{this.showSearchTermAndNumberOfResults()}</h4>
          {this.renderArticles()}
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

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      actions: bindActionCreators(displayActions, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer);
