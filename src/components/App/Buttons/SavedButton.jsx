import { withRouter } from "react-router-dom";
import React from "react";

const SavedButton = withRouter(({ history }) => (
  <div className="button-saved">
    <i
      className="far fa-star"
      onClick={() => {
        history.push("/saved");
      }}
    />
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
