import React from "react";
import "../styles.css";

const About = () => {
  return (
    <section id="about" className="about">
      <img src="public\profile.png" alt="Profile" className="profile-pic" />
      <h2>About Me</h2>
      <p>
        Passionate about coding, AI, and game development. Currently pursuing my B.Tech in Computer Science.
      </p>
    </section>
  );
};

export default About;
