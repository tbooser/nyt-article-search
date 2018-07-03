import React from "react";
import { Route } from "react-router-dom";
import App from "./App.js";

export default () => (
	<div>
		<Route exact path="/" component={App} />
	</div>
);
