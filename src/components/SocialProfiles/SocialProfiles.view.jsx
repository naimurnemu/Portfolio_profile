import React from 'react';
import { SocialAccounts } from '../Header/data';
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import "./SocialProfiles.css"

const SocialProfiles = () => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {/* {SocialAccounts.twitter && ( */}
          <li>
            <a href={SocialAccounts.twitter}>
              <FaTwitter />
            </a>
          </li>
        {/* )} */}
        {/* {SocialAccounts.github && ( */}
          <li>
            <a href={SocialAccounts.github}>
              <FaGithub />
            </a>
          </li>
        {/* )} */}
        {/* {SocialAccounts.facebook && ( */}
          <li>
            <a href={SocialAccounts.facebook}>
              <FaFacebookF />
            </a>
          </li>
        {/* )} */}
        {/* {SocialAccounts.linkedin && ( */}
          <li>
            <a href={SocialAccounts.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        {/* )} */}
        {/* {SocialAccounts.youtube && ( */}
          <li>
            <a href={SocialAccounts.youtube}>
              <FaYoutube />
            </a>
          </li>
        {/* )} */}
        {/* {SocialAccounts.twitch && ( */}
          <li>
            <a href={SocialAccounts.twitch}>
              <FaTwitch />
            </a>
          </li>
        {/* )} */}
      </ul>
      <p>Reach Me</p>
    </div>
  );
};

export default SocialProfiles;