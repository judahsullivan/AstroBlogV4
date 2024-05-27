import { HeaderLinkAnimation } from "./headerlink";
import { MobileMenu } from "./mobilemenu";
import { ActiveLinkAnimation } from "./activelink";
import gsap from "gsap";
import barba from "@barba/core";

export const NavigationAnimation = () => {
  document.addEventListener("DOMContentLoaded", () => {
    HeaderLinkAnimation();
    MobileMenu();
    ActiveLinkAnimation();
  });
};

barba.hooks.afterLeave(() => {
  NavigationAnimation();
});
