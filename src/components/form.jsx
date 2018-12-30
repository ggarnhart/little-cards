import React, { Component } from "react";
import Card from "./card";

class Form extends Component {
  state = {
    value: "",
    twitter: "",
    company: "lyft"
  };
  render() {
    return (
      <div className="form-div">
        <form onSubmit={this.handleSubmit} className="flex-form">
          <div className="row">
            <div className="col">
              <label for="code-input" id="loyalty-code-label">
                Loyalty Code
              </label>
              <br />
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleCodeChange}
                id="code-input"
              />
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col">
              <label for="twitter-name">Twitter Username</label>
              <br />
              <input
                type="text"
                id="twitter-username"
                placeholder="@"
                onChange={this.handleTwitterChange}
              />
            </div>
          </div>
          <br />
          <br />
          {/* Radio Buttons */}
          <div className="radio-div">
            <label>
              <input
                type="radio"
                name="logos"
                onChange={this.handleCompanyChange}
                value="lyft"
              />
              <img
                class="radio-img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/2560px-Lyft_logo.svg.png"
              />
            </label>

            <label>
              <input
                type="radio"
                name="logos"
                onChange={this.handleCompanyChange}
                value="uber"
                id="uberRadio"
              />
              <img
                class="radio-img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/2880px-Uber_logo_2018.png"
              />
            </label>

            <label>
              <input
                type="radio"
                name="logos"
                onChange={this.handleCompanyChange}
                value="airbnb"
              />
              <img
                class="radio-img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2880px-Airbnb_Logo_B%C3%A9lo.svg.png"
              />
            </label>

            <label>
              <input
                type="radio"
                name="logos"
                onChange={this.handleCompanyChange}
                value="instacart"
              />
              <img
                class="radio-img"
                src="https://assets.brandfolder.com/pgnzy2-2ds42g-feh8hy/original/instacart-logo-wordmark-transparent.png"
              />
            </label>

            <label>
              <input
                type="radio"
                name="logos"
                onChange={this.handleCompanyChange}
                value="robinhood"
              />
              <img
                class="radio-img"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Robinhood_Logo.png"
              />
            </label>
          </div>
          <br />

          <input type="submit" value="Update It 👉" />
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const code = this.state.value;
    this.props.onCodeChange(code);

    const company = this.state.company;
    this.props.onCompanyChange(company);

    const twitter = this.state.twitter;
    this.props.onTwitterChange(twitter);
  };

  handleCodeChange = event => {
    this.setState({ value: event.target.value });
    this.props.onCodeChange(this.state.value);
  };

  handleCompanyChange = event => {
    // event.preventDefault();
    const company = event.target.value;
    this.setState({ company });
    this.props.onCompanyChange(company);
  };

  handleTwitterChange = event => {
    this.setState({ twitter: event.target.value });
    this.props.onTwitterChange(this.state.twitter);
  };
}

export default Form;
