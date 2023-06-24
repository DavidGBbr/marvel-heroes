import React from "react";
import * as C from "./styles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <C.Footer>
      <span>© David Brigido</span>
      <C.SocialMedia>
        <a href="https://github.com/DavidGBbr" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/david-brigido/" target="_blank">
          <AiFillLinkedin />
        </a>
      </C.SocialMedia>
    </C.Footer>
  );
};
