import { HeroAnimations } from "./Home/hero";

export const homeView = {
  namespace: "Home",
  afterEnter: () => {
    console.log("Lets add some Home Animations!");

    HeroAnimations();
  },
};
