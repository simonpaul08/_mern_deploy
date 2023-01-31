import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#E63946]">
      <div className="md:flex block text-center items-center justify-between text-white max-w-screen-xl p-8 mx-auto">
        <div>
          <h4>
            &copy; Copyright 2023 Life in the UK Test Web | All Rights Reserved
            |<Link to="/termsAndConditions"> Terms and Conditions </Link>|
            <Link to="/privacyPolicy"> Privacy Policy </Link>
          </h4>
        </div>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.facebook.com/lifeintheuktestgroup"
            target="_blank"
          >
            <AiFillFacebook size={40} />
          </a>
          <a href="https://twitter.com/lifeinuktestweb" target="_blank">
            <AiFillTwitterSquare size={40} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCjIzmL1Gk15VUn-uDbcr4yg"
            target="_blank"
          >
            <AiFillYoutube size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
