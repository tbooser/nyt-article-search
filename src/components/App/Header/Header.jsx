import React, { Component } from "react";

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<h1>
					<i className="far fa-newspaper" />
					{this.props.h1}
				</h1>
			</div>
		);
	}
}
