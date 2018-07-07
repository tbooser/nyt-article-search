import { withRouter } from "react-router-dom";
import React from "react";

const SavedButton = withRouter(({ history }) => (
	<div className="button-saved">
		<button
			type="button"
			onClick={() => {
				history.push("/saved");
			}}
		>
			Favorites
		</button>
	</div>
));

export default SavedButton;
