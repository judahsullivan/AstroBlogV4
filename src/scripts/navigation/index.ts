import { HeaderLinkAnimation } from "./headerlink";
import { MobileMenu } from "./mobilemenu";
import { ActiveLinkAnimation } from "./activelink";
import gsap from "gsap";

export const NavigationAnimation = () => {
  document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".header", {
      y: "-100%",
      delay: 1.2,
    });
    HeaderLinkAnimation();
    MobileMenu();
    ActiveLinkAnimation();
  });
};
