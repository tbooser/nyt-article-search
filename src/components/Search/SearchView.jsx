import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as articleActions from "../../actions/index.js";

class SearchView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ searchTerm: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		event.target.reset();
		this.props.actions.articleActions.articleSearch(this.state.searchTerm);
		this.setState({ searchTerm: "" });
	}

	render() {
		return (
			<div className="search-input-container">
				<form onSubmit={this.handleSubmit}>
					<div className="input-group mb-3">
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
