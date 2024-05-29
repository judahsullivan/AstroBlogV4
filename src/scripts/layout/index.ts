import gsap from "gsap";

export function LayoutEnter(container: HTMLElement): void {
  const overlay = document.querySelector(".overlay");
  if (!overlay) {
    console.error("Overlay element not found!");
    return;
  }

  // Create a new timeline for enter animation
  const pageTransitionEnterTl = gsap.timeline();

  pageTransitionEnterTl
    .set(overlay, {
      transformOrigin: "top",
    })
    .to(overlay, { scaleY: 0, duration: 1, ease: "power2.inOut" }, 0);
}

export function LayoutExit(container: HTMLElement): Promise<void> {
  const overlay = document.querySelector(".overlay");
  if (!overlay) {
    console.error("Overlay element not found!");
    return Promise.resolve(); // Resolve immediately if no overlay
  }

  return new Promise<void>((resolve) => {
    // Create a new timeline for exit animation
    const pageTransitionExitTl = gsap.timeline({
      onComplete: resolve, // Resolve the promise when the animation completes
    });
    pageTransitionExitTl.to(overlay, {
      transformOrigin: "bottom",
      scaleY: 1,
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => {
        pageTransitionExitTl.set(overlay, {
          transformOrigin: "bottom",
        });
      },
    });
  });
}
