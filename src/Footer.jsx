import React from "react";
import instagram from "./assets/instagram.svg";
import linkedin from "./assets/linkedln.svg";
import whatsapp from "./assets/whatsapp.svg";
const Footer = () => {
  return (
    <footer className="footer items-center p-4 justify-center bg-neutral text-neutral-content flex w-[100vw]">
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.instagram.com/">
          <img src={instagram} alt="instagram" className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/">
          <img src={linkedin} alt="linkedin" className="w-6 h-6" />
        </a>
        <a href="https://www.whatsapp.com/">
          <img src={whatsapp} alt="whatsapp" className="w-6 h-6" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
