import gsap from "gsap";

export function HeroAnimations() {
  const heroSections = document.querySelectorAll(".hero");

  heroSections.forEach((heroSection) => {
    const title = heroSection.querySelector(".title");
    const desc = heroSection.querySelector(".desc");
    const imgContainer = heroSection.querySelector(".img-container");
    const img = heroSection.querySelector(".hero-img");

    // Set initial state of imgContainer to cover the entire screen
    gsap.set(imgContainer, {
      y: "-60%",
      borderRadius: "0px",
      scale: 1.07,
    });

    gsap.to(imgContainer, {
      delay: 1,
      y: 50,
      x: -50,
      duration: 1.5,
      position: "initial",
      borderRadius: "15px",
      scale: 0.95,
      ease: "power3.out",
    });

    gsap.fromTo(
      [title, desc],
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 1.5,
        stagger: 0.09,
        ease: "power4.inOut",
      }
    );
    gsap.from(img, {
      scale: 1.05,
      delay: 1.2,
      duration: 1.2,
    });
  });
}

document.addEventListener("DOMContentLoaded", HeroAnimations);
