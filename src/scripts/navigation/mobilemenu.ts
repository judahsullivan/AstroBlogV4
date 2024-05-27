import gsap from "gsap";

export function MobileMenu() {
  // Select the menu button and the menu
  const menubutton = document.querySelector(".menu-button");
  const menu = document.querySelector(".menu");
  const menuLinks = menu?.querySelectorAll(
    ".header-link"
  ) as NodeListOf<HTMLAnchorElement> | null; // Updated type declaration

  let isMenuOpen = false;

  const menutl = gsap.timeline({ paused: true });

  menutl.to(
    menu,
    {
      left: "0%", // Assuming the menu slides in from the left
      duration: 0.5,
      ease: "power2.inOut",
    },
    0
  );
  if (menuLinks) {
    menutl.fromTo(
      menuLinks,
      {
        opacity: 0,
        y: "100%",
      },
      {
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        y: "0%",
      }
    );
  }

  gsap.set(menu, { left: "100%" });

  menubutton?.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      menutl.play();
    } else {
      menutl.reverse();
    }
  });

  if (menuLinks) {
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        isMenuOpen = false;
        menutl.reverse();
      });
    });
  }
}

MobileMenu();
