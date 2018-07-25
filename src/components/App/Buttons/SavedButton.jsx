import { withRouter } from "react-router-dom";
import React from "react";

const SavedButton = withRouter(({ history }) => (
	<div className='button-saved-container'>
		<div
			className="button-saved"
			onClick={() => {
				history.push("/saved");
			}}
		>
			<i className="far fa-star" />
			<span> Saved Articles</span>
		</div>
	</div>
));

export default SavedButton;

// <button
//   type="button"
//   className="btn btn-primary"
//   type="button"
//   onClick={() => {
//     history.push("/saved");
//   }}
// >
//   Favorites
// </button>
