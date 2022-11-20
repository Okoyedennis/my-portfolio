import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">
        DENNIS
      </a>
      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/dennis-okoye-9b00b71b0/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Okoyedennis"
          target="_blank"
          rel="noreferrer"
        >
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
      <div className="footer__copyright">
        <small>&copy; DENNIS Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
