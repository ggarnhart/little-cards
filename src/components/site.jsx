import React, { Component } from "react";
import Card from "./card";
import Form from "./form";

class Site extends Component {
  state = {
    code: "E7HB943",

    form: {},
    card: {
      id: 10,
      brand: "lyft",
      website: "Lyft.com",
      mainColor: "EA0B8C",
      offColor: "C50976",
      imgSource:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/2560px-Lyft_logo.svg.png"
    }
  };
  render() {
    return (
      <div className="site-container">
        <Form />
        <Card
          id={this.state.card.id}
          imgSource={this.state.card.imgSource}
          website={this.state.card.website}
          mainColor={this.state.card.mainColor}
          offColor={this.state.card.offColor}
          onSubmitChange={this.handleSubmittedChange}
        />
      </div>
    );
  }
}

export default Site;
