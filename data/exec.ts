export type ExecMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  major?: string;
  year?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  current: boolean;
};

export const execBoard: ExecMember[] = [
  {
    id: "president",
    name: "Albert Castrejon",
    role: "President",
    bio: "Leading V:POG and keeping the org running.",
    current: true,
  },
  {
    id: "vp",
    name: "Jack Armstrong",
    role: "Vice President",
    bio: "Supporting org operations and member experience.",
    current: true,
  },
  {
    id: "treasurer",
    name: "Carter Buell",
    role: "Treasurer & Technical Lead",
    bio: "Keeping the books balanced and the codebase clean.",
    current: true,
  },
  {
    id: "secretary",
    name: "Harry Tran",
    role: "Secretary",
    bio: "Keeping V:POG organized and members informed.",
    current: true,
  },
  {
    id: "art-lead",
    name: "Cherish Farmer",
    role: "Art Lead",
    bio: "Directing art and visual development across V:POG projects.",
    current: true,
  },
];
