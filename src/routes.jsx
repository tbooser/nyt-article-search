import React from "react";
import { Route } from "react-router-dom";
import App from "./App.js";
import SavedContainer from "./components/Saved/SavedContainer";

export default () => (
	<div>
		<Route exact path="/" component={App} />
		<Route exact path="/saved" component={SavedContainer} />
	</div>
);
