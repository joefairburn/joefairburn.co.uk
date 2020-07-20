import React from "react";
import EmailIcon from "../images/icons/icons8_envelope.inline.svg";
import GitHubIcon from "../images/icons/icons8_github.inline.svg";
import LinkedinIcon from "../images/icons/icons8_linkedin.inline.svg";

const Contact = () => {
  return (
    <ul className="contact-list">
      <li>
        <a
          className="github-image"
          href="https://www.github.com/joefairburn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
      </li>
      <li>
        <a
          className="linkedin-image"
          href="https://www.linkedin.com/in/joefairburn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </a>
      </li>
      <li>
        <a
          className="mail-image"
          href="mailto:joe.fairburn1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon />
        </a>
      </li>
    </ul>
  );
};

export default Contact;
