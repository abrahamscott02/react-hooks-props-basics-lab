import React from "react";

function About({ bio }) {
  if (!bio || bio === '') {
    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      </div>
    );
  } else {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      </div>
    );
  }
}

export default About;