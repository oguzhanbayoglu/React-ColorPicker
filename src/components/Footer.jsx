import React from "react";
import logo from "./logo.png";

const Footer = () => {
  return (
    <footer className="text-white text-[1rem] mb-10 flex gap-6 items-center justify-center">
      <img src={logo} alt="" className="h-6 w-6" />
      <p>Oguzhan Bayolu - 2024 ©</p>
    </footer>
  );
};

export default Footer;
