import React from "react";

// function About() {
import Links from "./Links";
function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      {props.bio !== ''&& typeof props.bio!== 'undefined' ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}


export default About;