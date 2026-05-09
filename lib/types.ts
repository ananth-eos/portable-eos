export type Genre =
  | "business"
  | "psychology"
  | "self"
  | "science"
  | "history"
  | "biography"
  | "philosophy"
  | "fiction";

export type GenreInfo = {
  slug: Genre;
  name: string;
  description: string;
};

export type Author = {
  slug: string;
  name: string;
  bio: string;
};

export type Book = {
  slug: string;
  title: string;
  subtitle?: string;
  authorSlug: string;
  year: number;
  publisher?: string;
  pages: number;
  rating?: number;
  genre: Genre;
  tags: string[];
  framing: string;
  thesis: string;
  ideaSlugs: string[];
  relatedBookSlugs: string[];
  relatedNotes?: Record<string, string>;
};

export type Idea = {
  slug: string;
  text: string;
  bookSlug: string;
  chapterRef: string;
  readMin: number;
  position: number;
  tags: string[];
  whyItMatters: string;
  distilled: string;
  whereElse?: string;
  howToUse?: string;
  relatedIdeaSlugs: string[];
};
