import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/schemaTypes";
import { dataset, apiVersion, projectId, useCdn } from "@/consts";

export default defineConfig({
  name: "Astronaut",
  title: "Astro Blog",
  projectId: projectId,
  dataset: dataset,
  apiVersion,
  useCdn,
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
