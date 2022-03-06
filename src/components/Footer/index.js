import React from "react";
import Github from "../Icons/Github";
import Email from "../Icons/Email";
import Linkedin from "../Icons/Linkedin";

const Footer = () => {
  return (
    <div className="d-flex footer">
      <h3 className="m-0">&copy;{new Date().getFullYear()} by Monika Kothari </h3>
      <a className="footer-icon" href="https://github.com/mkothari93">
        <Github />
      </a>
      <a href="mailto:mkothari.1993@gmail.com">
        
        <Email />
      </a>
      <a href="https://www.linkedin.com/in/monika-kothari-5872a891/">
        
        <Linkedin />
      </a>
    </div>
  );
};

export default Footer;
