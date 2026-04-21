import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative beofre:content-[''] before:top-2 before:bottom-0 before:blur before:bg-[linear-gradient(to_right,#F87BFF,#F892C7,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute before:inset-0 before:-z-10 before:blur-[100px]">

        <Image src={logo} alt="SaaS Logo" height={40} className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row gap-6 mt-6 justify-center">
          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Costumers</a>
          <a href="">Pricing</a>
          <a href="">Help</a>
          <a href="">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialLinkedIn />
          <SocialInsta />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">&copy; 2023 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
