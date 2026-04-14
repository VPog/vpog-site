export type Company = {
  id: string;
  name: string;
  logo: string;
  logoBg: string;   // background for logo tile since logos have white/transparent bg
  category: string;
};

export const companies: Company[] = [
  {
    id: "iron-galaxy",
    name: "Iron Galaxy Studios",
    logo: "/images/logos/iron-galaxy.webp",
    logoBg: "rgba(255,255,255,0)",
    category: "Game Studio",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    logo: "/images/logos/microsoft.webp",
    logoBg: "rgba(255,255,255,0)",
    category: "Tech",
  },
  {
    id: "vanderbilt-eng",
    name: "Vanderbilt School of Engineering",
    logo: "/images/logos/vanderbilt-eng.png",
    logoBg: "rgba(255,255,255,0)",
    category: "Academia",
  },
];
