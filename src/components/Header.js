import React from "react";
import "../styles.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Christopher Joshy</h1>
      <nav className="navbar">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
