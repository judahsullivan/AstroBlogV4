import { loadEnv } from "vite";
const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
} = loadEnv(import.meta.env.MODE, process.cwd(), "");

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";

const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID || PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_STUDIO_DATASET || PUBLIC_SANITY_DATASET;

export default defineConfig({
  site: "https://astro-blog-v4.vercel.app/",
  output: "hybrid",
  adapter: vercel(),
  integrations: [
    sanity({
      projectId: projectId,
      dataset: dataset,
      studioBasePath: "/admin",
      useCdn: false,
      apiVersion: "2023-03-20",
    }),
    mdx(),
    sitemap(),
    tailwind(),
    react(),
    icon(),
  ],
});
