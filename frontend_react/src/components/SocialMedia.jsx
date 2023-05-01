import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="//linkedin.com/in/jobin-mathew-923719184"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>

      <a
        href="https://github.com/jobinmathew18"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a>
        <BsInstagram />
      </a>
      <a>
        <BsTwitter />
      </a>
    </div>
  );
};

export default SocialMedia;
