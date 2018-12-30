import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card";
import Footer from "./components/footer";
import Navbar from "./components/nav";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Card />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
