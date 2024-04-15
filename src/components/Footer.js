import * as React from "react";
import "twin.macro";

import LinkedInIcon from "../images/assets/linkedin-icon.inline.svg";
import TwitterIcon from "../images/assets/twitter-x-icon.inline.svg";

export const Footer = () => (
  <div tw="w-full bg-slate">
    <div tw="pt-8 pb-20 mx-auto text-white lg:(px-0 w-lg)">
      <div tw="flex justify-center">
        <a
          href="https://www.linkedin.com/in/billy-skchan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon alt="LinkedIn" tw="fill-white w-8 h-8 mx-2" />
        </a>
        <a
          href="https://twitter.com/bjoechan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon alt="Twitter" tw="fill-white w-8 h-8 mx-2" />
        </a>
      </div>
      <p tw="text-center mt-4">© 2024 Billy Chan. All rights reserved.</p>
    </div>
  </div>
);
