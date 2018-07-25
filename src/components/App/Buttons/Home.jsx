import { withRouter } from "react-router-dom";
import React from "react";

const HomeButton = withRouter(({ history }) => (
  <div className="button-home d-flex justify-content-start">
    <i
      className="fas fa-home"
      onClick={() => {
        history.push("/");
      }}
    />
  </div>
));

export default HomeButton;

// <button
//   type="button"
//   className="btn btn-primary "
//   onClick={() => {
//     history.push("/");
//   }}
// >
//   Home
// </button>;
