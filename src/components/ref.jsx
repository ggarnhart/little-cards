import React, { Component } from "react";

class RefBar extends Component {
  render() {
    return (
      <div className={this.refBarFormatter()}>
        <div className="container text-center">
          <h3>{this.refBarMessage()}</h3>
        </div>
      </div>
    );
  }

  refBarFormatter = () => {
    const reference = this.props.reference;
    const classes = "row " + reference + "-ref-bar";
    return classes;
  };

  refBarMessage = () => {
    const reference = this.props.reference;
    if (reference === "producthunt") {
      return "😻  Welcome, Product Hunter  😻";
    } else if (reference === "") {
      return "";
    }
  };
}

export default RefBar;
