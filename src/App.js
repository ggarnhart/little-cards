import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card";
import Footer from "./components/footer";
import Navbar from "./components/nav";
import RefBar from "./components/ref";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <RefBar reference={this.getRef()} />
        <Card />
        <Footer />
      </React.Fragment>
    );
  }

  getRef = () => {
    var curURL = window.location.href;
    console.log(curURL);
    if (curURL.indexOf("producthunt") > 0) {
      return "producthunt";
    }
    return "not-yet";
  };
}

export default App;
