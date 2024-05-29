import type { Image } from "sanity";

export interface RoutesProps {
  path: string;
  page: string;
}

export interface Socials{
  name: string;
  link: string;
}

export interface HomeProps {
  title: string;
  description: string;
  callToAction: string;
  image: Image;
  latestArticles: BlogProps[];
}

export interface TechnologyProps {
  icon: string;
  name: string;
  link: string;
}

export interface Category {
  title: string;
  description: string;
}

export interface Tags {
  title: string;
  description: string;
}

export interface Likes {
  likes: number;
}

export interface Comments {
  user: string;
  date: string;
  comment: any;
}

export interface BlogProps {
  title: string;
  description: string;
  coverImage: Image;
  tags: string[];
  category: Category;
  body: any;
}
