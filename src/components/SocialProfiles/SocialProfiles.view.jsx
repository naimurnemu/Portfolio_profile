import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaDiscord
} from "react-icons/fa";
import "./SocialProfiles.css"

const SocialProfiles = () => {
  return (
    <div className="stick_follow_icon">
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/naimurnemu/">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/naimurnemu">
            <FaGithub />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/naimurnemu">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://discord.com/users/_naimurrahman">
            <FaDiscord />
          </a>
        </li>
      </ul>
      <p>Reach Me On</p>
    </div>
  );
};

export default SocialProfiles;