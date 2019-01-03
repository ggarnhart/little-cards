import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row" id="about">
          <div className="col">
            <h2>Wait, what is this?</h2>
            <p>
              Good question. Following busy semesters, I have a hard time going
              from doing 8+ hours of work a day to doing nothing at all. So,
              when this semester came to a close, I figured Winter Break would
              be a good time to start discovering{" "}
              <span className="font-weight-bold">ReactJS</span>. This is a first
              attempt at messing around with changing states, moveable
              components, and basically react in general. It's nice.
            </p>
            <h4>
              Why do you need to hit update for the profile pic to change?
            </h4>
            <p>
              The API sorta times out if you request 5+ images right after a
              keyboard input has been changed. I could have used a timer, but I
              liked the finality of the submit button.
            </p>
            <h4>Can we work together?</h4>
            <p>
              Yes! Shoot me an{" "}
              <a href="mailto:greg.garnhart12@gmail.com">email.</a> I frequently
              do work with other students, local businesses, and enterpreneurs.
              My other winter break project has been advising{" "}
              <a href="https://www.ringersports.com/">Ringer Sports</a>,
              creating both their website and the beginnings of an MVP.
            </p>
            <h4>Can I put a "Card" on my own website?</h4>
            <p>
              If I can finish my internship applications in time to build that
              functionality, then yes. You'll probably need bootstrap.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
