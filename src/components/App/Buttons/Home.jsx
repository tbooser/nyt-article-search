import { withRouter } from "react-router-dom";
import React from "react";

const HomeButton = withRouter(({ history }) => (
	<div className="button-home">
		<button
			type="button"
			onClick={() => {
				history.push("/");
			}}
		>
			Home
		</button>
	</div>
));

export default HomeButton;
