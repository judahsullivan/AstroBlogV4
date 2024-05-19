// This is Script for the Entire Navigation including the MobileNav
import gsap from "gsap";

const links = document.querySelectorAll(".header-link");

// this is for the HeaderLink animations

export function HeaderLinkAnimation() {
  links.forEach((link) => {
    const line = link.querySelector(".link-line");
    let hoverTimeout: any;

    link.addEventListener("mouseover", () => {
      hoverTimeout = setTimeout(() => {
        gsap.to(line, {
          scaleX: "100%",
          duration: 0.3,
        });
      }, 250); // 250 milliseconds = 0.5 seconds
    });

    link.addEventListener("mouseout", () => {
      clearTimeout(hoverTimeout);
      gsap.to(line, {
        transformOrigin: "right",
        scaleX: "0%",
        duration: 0.3,
        onComplete: () => {
          gsap.set(line, {
            transformOrigin: "left",
          });
        },
      });
    });
  });
}
