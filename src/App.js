import React, { Component } from "react";
import "./styles/App.css";
import SidebarContainer from "./components/App/Sidebar/SidebarContainer";
import DisplayContainer from "./components/Display/DisplayContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <SidebarContainer title='Search Articles' />
            </div>
            <DisplayContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
