import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./signIn";
import DashBoard from "./Dashboard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <SignIn />;
  }
}

export default App;
