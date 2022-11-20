import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/dennis-okoye-9b00b71b0/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Okoyedennis" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.facebook.com/chinex.dennis"
        target="_blank"
        rel="noreferrer"
      >
        <FiFacebook />
      </a>
      <a
        href="https://twitter.com/OkoyeDennis07"
        target="_blank"
        rel="noreferrer"
      >
        <FiTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
