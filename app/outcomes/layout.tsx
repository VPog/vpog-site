import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Outcomes",
  description:
    "See where Vanderbilt Programmers of Gaming alumni work. V:POG builds careers.",
};

export default function OutcomesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
