import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/index.js";
import SavedView from "./SavedView";
import HomeButton from "../App/Buttons/Home";

export class SavedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderSaved = this.renderSaved.bind(this);
  }

  componentDidMount() {}

  renderSaved() {
    let savedArticles = this.props.savedState.saveArticle.articles;
    console.log(savedArticles);
    return savedArticles.map(article => {
      return (
        <SavedView
          key={Math.random()}
          headline={article.article.headline.main}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <HomeButton />
        {this.renderSaved()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    savedState: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      savedActions: bindActionCreators(actions, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedContainer);
