import React from "react";
import Github from "../Icons/Github";
import Email from "../Icons/Email";
import Linkedin from "../Icons/Linkedin";

const Footer = () => {
  return (
    <div className="d-flex footer">
      <h4>&copy;{new Date().getFullYear()} by Monika Kothari </h4>
      <h4 className="footer-icon" href="https://github.com/mkothari93">
        <Github />
      </h4>
      <h4 href="mailto:mkothari.1993@gmail.com">
        
        <Email />
      </h4>
      <h4 href="https://www.linkedin.com/in/monika-kothari-5872a891/">
        
        <Linkedin />
      </h4>
    </div>
  );
};

export default Footer;
