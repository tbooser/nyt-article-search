import React, { Component } from "react";
import "./styles/App.css";
import HeaderContainer from "./components/App/Header/HeaderContainer";
import DisplayContainer from "./components/Display/DisplayContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <DisplayContainer />
      </div>
    );
  }
}

export default App;
