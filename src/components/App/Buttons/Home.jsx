import { withRouter } from "react-router-dom";
import React from "react";

const HomeButton = withRouter(({ history }) => (
  <div className="button-home d-flex justify-content-start">
    <button
      type="button"
      className="btn btn-primary "
      onClick={() => {
        history.push("/");
      }}
    >
      Home
    </button>
  </div>
));

export default HomeButton;
