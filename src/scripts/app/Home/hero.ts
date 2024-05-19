import gsap from "gsap";

export function HeroAnimations() {
  const hero = document.querySelectorAll(".hero");
  const herotl = gsap.timeline({
    defaults: {
      delay: 0.22,
    },
  });

  hero.forEach((heroSection) => {
    const title = heroSection?.querySelector(".title");
    const banner = heroSection?.querySelector(".banner");
    const bannertitle = heroSection?.querySelector(".banner-title");

    herotl
      .fromTo(
        title,
        {
          opacity: 0,
          y: "30%",
          duration: 1,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        }
      )
      .fromTo(
        banner,
        {
          transformOrigin: "left",
          scaleX: 0,
        },
        {
          scaleX: 1,
        },
        0.5
      )
      .to(bannertitle, {
        y: 0,
      });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  HeroAnimations();
});
