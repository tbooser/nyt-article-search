import React, { Component } from "react";

export default class Sidebar extends Component {
	render() {
		return (
			<div className="header">
				<h5>{this.props.h5}</h5>
			</div>
		);
	}
}
