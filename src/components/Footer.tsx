import { Dribbble, Facebook, Instagram, Twitter, Youtube } from "react-feather";
import Logo from "./Logo";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="text-center">
      <div className="flex justify-center gap-3 py-8">
        <SocialIcon>
          <Facebook />
        </SocialIcon>
        <SocialIcon>
          <Twitter />
        </SocialIcon>
        <SocialIcon>
          <Instagram />
        </SocialIcon>
        <SocialIcon>
          <Youtube />
        </SocialIcon>
        <SocialIcon>
          <Dribbble />
        </SocialIcon>
      </div>
      <Logo />
      <p className="py-6 text-sm">Switch © 2024 • All rights reserved</p>
    </footer>
  );
};

export default Footer;
