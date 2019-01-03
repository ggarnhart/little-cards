import React, { Component } from "react";

class CodeButton extends Component {
  state = {};
  render() {
    return (
      <a target="_blank" href={this.formatLink()} className="button-link">
        <button className="code-button">
          <i class="fas fa-code" /> See the Code
        </button>
      </a>
    );
  }
  formatLink = () => {
    console.log(this.props.url);
    const url = this.props.url;
    return url;
  };
}

export default CodeButton;
