import type { RoutesProps, Socials, TechnologyProps } from "../types";

export const routes: RoutesProps[] = [
  {
    path: "/blog",
    page: "Blog",
  },
];

export const tech: TechnologyProps[] = [
  {
    icon: "technologies/gsap",
    name: "Gsap",
    link: "",
  },
  {
    icon: "technologies/astro",
    name: "Astro",
    link: "",
  },
  {
    icon: "technologies/barbajs",
    name: "Barbajs",
    link: "",
  },
  {
    icon: "technologies/tailwindcss",
    name: "Tailwindcss",
    link: "",
  },
];

export const socials: Socials[] = [
  {
    link: "https://github.com/",
    name: "Github",
  },
  {
    link: "https://awwwards.com/",
    name: "Awwwards",
  },
  {
    link: "https://linkedin.com/",
    name: "Linkedin",
  },
  {
    link: "https://youtube.com/",
    name: "Youtube",
  },
];
