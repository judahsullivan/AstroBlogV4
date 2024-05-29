import { sanityClient } from "sanity:client";

export async function fetchArticles() {
  const query = '*[_type == "article"]{_id, title, slug, publishedAt, body}';
  return await sanityClient.fetch(query);
}
