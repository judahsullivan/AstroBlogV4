import { HeroAnimations } from "./Home/hero";

export const homeView = {
  namespace: "Home",
  afterEnter: () => {
    console.log("home has entered");
    HeroAnimations();
  },
};
