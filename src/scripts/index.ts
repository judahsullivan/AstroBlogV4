import barba, { type ITransitionData } from "@barba/core";
import { NavigationAnimation } from "./navigation";
import { LayoutEnter, LayoutExit } from "./layout";
import { HeroAnimations } from "./app/Home/hero";
import { homeView } from "./app";
import LocomotiveScroll from "locomotive-scroll";

if (history.scrollRestoration) {
  window.scrollTo(0, 0);
}

barba.init({
  views: [homeView],
  transitions: [
    {
      name: "default",
      once({ next }) {
        NavigationAnimation();
        LayoutEnter(next.container);
      },
      leave({ current }) {
        return LayoutExit(current.container); // Ensure this returns Promise<void>
      },
      enter({ next }) {
        LayoutEnter(next.container);
      },
    },
  ],
});
