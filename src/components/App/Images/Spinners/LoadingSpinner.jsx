import React from "react";
import loadingSpinner from "../../../../assets/grid.svg";

export default function LoadingSpinner() {
  return (
    <div className="container">
      <div className="row">
        <div className="loading-spinner-container">
          <div className="loading-spinner">
            <img alt="loading-spinner" src={loadingSpinner} />
          </div>
        </div>
      </div>
    </div>
  );
}
