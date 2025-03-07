export type ProjectsData = Project[];
export interface Project {
  title: string;
  image: string;
  hrefSite: string;
  hrefGit: string;
  description: string;
  functional: string[];
  technologies: string[];
}

export interface Skill {
  title: string;
  src: string;
  alt: string;
}
export type SkillsData = Skill[];

export type Exp = {
  title: string;
  icon: ExpIcon;
  date: string;
  text: string[];
  noMarker?: number[];
};
export type ExpData = Exp[];

export type ExpIcon = 'v6' | 'yandex';

export type HandleClickProjectPreview = (index: number) => void;
