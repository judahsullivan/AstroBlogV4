import Lenis from "lenis";

const lenis = new Lenis();

export const LenisScroll = () => {
  lenis.on("scroll", (e: any) => {});

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

  