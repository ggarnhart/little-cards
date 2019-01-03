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
            <a href="#about" className="nav-item nav-link">
              Wait, what is this?
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
