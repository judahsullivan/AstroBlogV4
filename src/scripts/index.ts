import barba from "@barba/core";
import { NavigationAnimation } from "./navigation";
import { LayoutEnter, LayoutExit } from "./layout";
import { homeView, blogView, articleViews } from "./views";
import { InitScroll } from "./Locomotive";

document.addEventListener("DOMContentLoaded", () => {
  const initializeBarba = async () => {
    const articleViewList = await articleViews();

    barba.init({
      views: [homeView, blogView, ...articleViewList],
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
  };

  initializeBarba();
});
