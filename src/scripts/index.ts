import barba from "@barba/core";
import { NavigationAnimation } from "./navigation";
import { LayoutEnter, LayoutExit } from "./layout";
import { homeView, blogView } from "./views";
import { InitScroll } from "./Locomotive";

barba.init({
  views: [homeView, blogView],
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

barba.hooks.after(() => {
  InitScroll();
});
