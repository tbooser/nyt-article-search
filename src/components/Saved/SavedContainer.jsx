import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/index.js";
import SavedView from "./SavedView";

export class SavedContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return <SavedView />;
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
			savedActions: bindActionCreators(actions, dispatch)
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedContainer);
