import gsap from "gsap";

export function MobileMenu() {
  // Select the menu button and the menu
  const menubutton = document.querySelector(".menu-button");
  const menu = document.querySelector(".menu");
  const menuLinks = menu?.querySelectorAll(
    ".header-link"
  ) as NodeListOf<HTMLAnchorElement> | null; // Updated type declaration

  // Boolean variable to track the menu state
  let isMenuOpen = false;

  // Create a GSAP timeline for the menu animation
  const menutl = gsap.timeline({ paused: true });

  // Animate the menu from hidden to visible
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

  // Ensure the menu is always closed initially
  gsap.set(menu, { left: "100%" });

  // Toggle menu open/close on button click
  menubutton?.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      menutl.play();
    } else {
      menutl.reverse();
    }
  });

  // Close the menu when a link inside the menu is clicked
  if (menuLinks) {
    // Ensure menuLinks is not null
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        isMenuOpen = false;
        menutl.reverse();
      });
    });
  }
}

// Initialize the MobileMenu
MobileMenu();
