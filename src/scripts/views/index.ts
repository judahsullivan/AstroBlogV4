import { fetchArticles } from "@/lib/articleRoute";
import { HeroAnimations } from "./Home/hero";

export const homeView = {
  namespace: "Home",
  afterEnter: () => {
    HeroAnimations();
  },
};

export const blogView = {
  namespace: "Blog",
  afterEnter: () => {},
};

export const articleViews = async () => {
  const articles = await fetchArticles();
  return articles.map((article: any) => ({
    namespace: article.slug.current,
    afterEnter: () => {},
  }));
};
