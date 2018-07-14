import React, { Component } from "react";
import Moment from "react-moment";

export class SavedView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card border-dark col-sm-3">
        <div className="card-body d-flex align-items-end align-items-start flex-column">
          <h5 className="card-title text-primary">{this.props.headline}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {" "}
            <Moment>{this.props.date}</Moment>
          </h6>
          <p className="card-text">{this.props.snippet}</p>
          <h5 className="w-100 mt-auto">
            <a
              href={this.props.url}
              target="_blank"
              className="badge badge-warning"
            >
              <i className="fas fa-glasses" />
            </a>
          </h5>
        </div>
      </div>
    );
  }
}

export default SavedView;
