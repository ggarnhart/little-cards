import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <a href="" className="navbar-brand">
            Little Cards
          </a>
          <div className="navbar-nav">
            <a href="https://ggarnhart.com" className="nav-item nav-link">
              Say Hi
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
