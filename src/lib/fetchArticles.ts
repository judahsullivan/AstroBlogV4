import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import { sanityClient } from "sanity:client";

export async function getArticles(): Promise<Post[]> {
  return sanityClient.fetch(
    `*[_type == "articles" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getArticle(slug: string): Promise<Post> {
  return await sanityClient.fetch(
    `*[_type == "articles" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}

export interface Post {
  _type: "post";
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  coverImage?: ImageAsset;
  content: PortableTextBlock[];
}
