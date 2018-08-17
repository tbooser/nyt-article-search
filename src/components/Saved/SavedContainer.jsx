import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/index.js";
import SavedView from "./SavedView";
import SavedSidebar from "./SavedSidebar";
import SidebarContainer from "../App/Sidebar/SidebarContainer";

export class SavedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderSaved = this.renderSaved.bind(this);
  }

  componentDidMount() {}

  renderSaved() {
    let savedArticles = this.props.savedState.saveArticle.articles;
    return savedArticles.map(article => {
      return (
        <SavedView
          key={Math.random()}
          headline={article.article.headline.main}
          snippet={article.article.snippet}
          url={article.article.web_url}
          date={article.article.pub_date}
        />
      );
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <SidebarContainer title="Saved Articles" />
          </div>
          <div className="col-md-9 mt-3">
            <div className="container">
              <div className="row">{this.renderSaved()}</div>
            </div>
          </div>
        </div>
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
