import type { Metadata } from "next";
import ExecClientPage from "./ExecClient";

export const metadata: Metadata = {
  title: "Exec Board",
  description:
    "Meet the current Vanderbilt Programmers of Gaming executive board — the students leading V:POG's events, projects, and community.",
};

export default function ExecPage() {
  return <ExecClientPage />;
}
