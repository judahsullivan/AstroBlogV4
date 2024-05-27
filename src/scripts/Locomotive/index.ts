import barba from "@barba/core";
import LocomotiveScroll from "locomotive-scroll";

export function InitScroll() {
  document
    .querySelectorAll<HTMLElement>("[data-scroll-container]")
    .forEach((container) => {
      const scroll = new LocomotiveScroll({
        el: container,
        smooth: true,
      });

      barba.hooks.beforeLeave(() => {
        scroll.destroy();
      });
      barba.hooks.beforeEnter(() => {
        window.scrollTo(0, 0);
        scroll.update();
      });
    });
}

document.addEventListener("DOMContentLoaded", () => {
  InitScroll();
});
