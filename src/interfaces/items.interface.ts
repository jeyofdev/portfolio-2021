export interface ISkill {
  id: number;
  image: string;
  title: string;
  icons: string[];
}

export interface IWork {
  id: number;
  image: string;
  title: string;
  content: string;
  techno: string[];
  isOnline: boolean;
  link: string;
  mockup: string;
  code?: string;
}

export interface IAbout {
  id: number;
  title: string;
  content: string;
}
