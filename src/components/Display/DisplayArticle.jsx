import React, { Component } from "react";
import Moment from "react-moment";
import DisplayModal from "./Modal";

class DisplayArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="display-article  list-group-item justify-content-start mb-5 p-3">
        <i className="far fa-bookmark d-flex justify-content-end" />
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
            <i class="fas fa-glasses" />
          </a>
        </h5>
      </div>
    );
  }
}

export default DisplayArticle;
