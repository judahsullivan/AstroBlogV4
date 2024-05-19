import { HeaderLinkAnimation } from "./headerlink";
import { MobileMenu } from "./mobilemenu";
import { ActiveLinkAnimation } from "./activelink";

export const NavigationAnimation = () => {
  document.addEventListener("DOMContentLoaded", () => {
    HeaderLinkAnimation();
    MobileMenu();
    ActiveLinkAnimation();
  });
};
