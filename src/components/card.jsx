import React, { Component } from "react";
import Form from "./form";

class Card extends Component {
  state = {
    id: 0,
    brand: "lyft",
    website: "Lyft.com",
    mainColor: "EA0B8C",
    offColor: "C50976",
    code: "E7HB943",
    imgSource:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/2560px-Lyft_logo.svg.png",
    twitter: "ggarnhart"
  };
  render() {
    return (
      <div className="container full-height">
        <div className="row">
          <div className="col-lg-6">
            <Form
              onCodeChange={this.handleCodeChange}
              onCompanyChange={this.handleCompanyChange}
              onTwitterChange={this.handleNewTwitter}
            />
          </div>
          <div className="col-lg-6 d-flex justify-content-md-center justify-content-sm-center justify-content-xs-center justify-content-lg-end">
            <div className="card col-md-7 col-lg-8 ">
              <div className={this.classFormaterTop()}>
                <img
                  src={this.state.imgSource}
                  alt=""
                  className={this.logoClass()}
                />
                <img
                  src={this.formatTwitterLink()}
                  className="twitter-profile"
                />
              </div>
              <div className={this.classFormaterBottom()}>
                <div className="col card-bottom-container">
                  <h2 className="code">{this.state.code}</h2>
                  <div className="border" />
                  <br />
                  <span>
                    Join on <span className="bold">{this.state.brand}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  formatBackground = () => {
    const color = this.state.mainColor;
    return "background: " + color;
  };

  formatTwitterLink = () => {
    const link = "https://avatars.io/twitter/" + this.state.twitter;

    return link;
  };
  classFormaterTop = () => {
    const className = "row card-top " + this.state.brand + "-top";
    return className;
  };

  logoClass = () => {
    const className = "logo " + this.state.brand + "-logo";
    return className;
  };

  classFormaterBottom = () => {
    const className = "row card-bottom " + this.state.brand + "-bottom";
    return className;
  };

  handleCodeChange = code => {
    this.setState({ code });
  };

  handleCompanyChange = brand => {
    this.setState({ brand });

    let imgSource;
    switch (brand) {
      case "robinhood":
        imgSource =
          "https://upload.wikimedia.org/wikipedia/commons/b/b9/Robinhood_Logo.png";
        break;
      case "instacart":
        imgSource =
          "https://assets.brandfolder.com/pgnzy2-2ds42g-feh8hy/original/instacart-logo-wordmark-transparent.png";
        break;
      case "airbnb":
        imgSource =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2880px-Airbnb_Logo_B%C3%A9lo.svg.png";
        break;
      case "uber":
        imgSource =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/2880px-Uber_logo_2018.png";
        break;
      case "lyft":
        imgSource =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/2560px-Lyft_logo.svg.png";
        break;
      default:
        imgSource =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/2560px-Lyft_logo.svg.png";
        break;
    }
    this.setState({ imgSource });
  };

  handleNewTwitter = twitter => {
    this.setState({ twitter });
  };
}

export default Card;
