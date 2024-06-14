import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Hector Vergara",
  EMAIL: "lol@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Hector Vergara personal blog",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of posts I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/hvergara"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/hvergara",
  }
];
