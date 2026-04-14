export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  genre: string;
  engine: string;
  year: number;
  featured: boolean;
  coverImage: string;
  githubUrl?: string;
  playUrl?: string;
  contributors: { name: string; role: string }[];
  tags: string[];
  color: string;
  status: "Released" | "In Development" | "Jam Entry";
};

export const projects: Project[] = [
  {
    id: "coffeepocalypse",
    title: "Coffeepocalypse",
    tagline: "Run a cafe by day. Scrounge for supplies by night.",
    description:
      "A post-apocalyptic cafe management and survival game. Keep your customers happy during the day, then venture out into the ruins after dark.",
    longDescription:
      "Coffeepocalypse drops you into a world where civilization has collapsed — but somehow, people still want their morning coffee. By day, manage your cafe: take orders, brew drinks, keep the lights on. By night, explore the ruined city scavenging for supplies, ingredients, and equipment. A work-in-progress project built in Unity by V:POG members, featuring original art assets created in Procreate and a hand-crafted aesthetic.",
    genre: "Simulation / Survival",
    engine: "Unity",
    year: 2026,
    featured: true,
    coverImage: "/images/coffeepocalypse-logo.webp",
    githubUrl: "https://github.com/VPog",
    contributors: [
      { name: "V:POG Members", role: "Development Team" },
    ],
    tags: ["Unity", "C#", "Simulation", "Survival", "WIP"],
    color: "#c9a84c",
    status: "In Development",
  },
  {
    id: "baby-bear-summer-camp",
    title: "Baby Bear Summer Camp",
    tagline: "A heartwarming platformer about friendship and summer.",
    description:
      "Guide a bear cub through a series of whimsical summer camp challenges. Collect fireflies, make friends, find your way home.",
    longDescription:
      "Baby Bear Summer Camp is a 2D platformer built in Unity where you play as an adorable bear cub navigating the joys and trials of summer camp life. Dodge pine cones, swing on vines, solve light puzzles, and befriend woodland creatures along the way. A fully student-built project by a V:POG team.",
    genre: "2D Platformer",
    engine: "Unity",
    year: 2023,
    featured: false,
    coverImage: "",
    githubUrl: "https://github.com/VPog",
    contributors: [
      { name: "V:POG Members", role: "Development Team" },
    ],
    tags: ["Unity", "C#", "2D", "Platformer"],
    color: "#1aa9d8",
    status: "Released",
  },
];
