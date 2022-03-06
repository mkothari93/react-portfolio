import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
<header>
  <h1 id="home"> 
    Monika Kothari
  </h1>
  {/* Navigation Bar */}
  <nav>
    <ul>
      <li>
        <Link></Link>
        <a href="#about-me">About Me</a>
      </li>
      <li>
        <a href="#my-work">My Work</a>
      </li>
      <li>
        <a href="#contact-me">Contact Me</a>
      </li>
    </ul>
  </nav>
  {/* End Navigation */}
</header>
}

export default Header;