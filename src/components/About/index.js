import React from "react";
import coverImage from "../../assets/images/monika.jpg";

const About = () => {
  return (
    <section>
      <h1>About Me</h1>
      <img src={coverImage} alt="Photo of Monika Kothari" />
      <div>
        <p>
          Hi there! I'm Monika Kothari and welcome to my portfolio! I am a
          chemist turned web developer. I graduated in 2016 with a Bachelor of
          Science in Chemistry and shortly after, I started working in the
          industry as a chemist. I enrolled in the UC Berkeley Coding Bootcamp
          to explore the field of web development. As my knowledge expands, so
          will this portfolio!
        </p>
      </div>
    </section>
  );
};

export default About;
