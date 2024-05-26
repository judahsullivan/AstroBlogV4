/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

interface ImportMetaEnv {
  readonly PUBLIC_SANITY_STUDIO_PROJECT_ID: string;
  readonly PUBLIC_SANITY_STUDIO_DATASET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
