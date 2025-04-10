export interface NavLink {
  href: string;
  label: string;
}

export interface Image {
  desktop: string;
  mobile: string;
}

export interface Stats {
  goal: number;
  backedAmount: number;
  backers: number;
  daysLeft: number;
}

export interface Pledge {
  id: string;
  name: string;
  minPledge: number;
  description: string;
  remaining: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  about: string[];
  image: Image;
  stats: Stats;
  pledgeOptions: Pledge[];
}

export interface User {
  id: string;
  bookmarks: string[];
}
