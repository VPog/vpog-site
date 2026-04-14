import { ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import type { ExecMember } from "@/data/exec";

const PS2 = "'Press Start 2P', monospace";

export function ExecCard({ member }: { member: ExecMember }) {
  const initials = member.name.split(" ").map(n => n[0]).join("").slice(0, 2);
  return (
    <div style={{ background: "var(--surface)", padding: "28px", transition: "background 0.2s" }}
      className="hover:bg-[var(--surface-2)]">
      <div style={{ width: "52px", height: "52px", borderRadius: "4px", background: "linear-gradient(135deg, rgba(26,169,216,0.2), rgba(201,168,76,0.2))", border: "1px solid var(--border-md)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: PS2, fontSize: "0.8rem", color: "var(--gold)", marginBottom: "16px" }}>
        {initials}
      </div>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "8px" }}>
        {member.role}
      </div>
      <h3 style={{ fontFamily: PS2, fontSize: "0.7rem", color: "var(--text)", marginBottom: "6px", lineHeight: 1.6 }}>
        {member.name}
      </h3>
      {member.year && member.major && (
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: "var(--text-dim)", marginBottom: "12px", lineHeight: 1.6 }}>
          {member.year} · {member.major}
        </p>
      )}
      <p style={{ fontSize: "0.84rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: member.linkedinUrl || member.githubUrl ? "16px" : 0 }}>
        {member.bio}
      </p>
      {(member.linkedinUrl || member.githubUrl) && (
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {member.linkedinUrl && (
            <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-dim)", background: "var(--bg-2)", border: "1px solid var(--border)", padding: "5px 10px", borderRadius: "2px", textDecoration: "none", transition: "all 0.15s" }}
              className="hover:text-[var(--gold)] hover:border-[rgba(201,168,76,0.4)]">
              <ExternalLink size={10} /> LinkedIn
            </Link>
          )}
          {member.githubUrl && (
            <Link href={member.githubUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-dim)", background: "var(--bg-2)", border: "1px solid var(--border)", padding: "5px 10px", borderRadius: "2px", textDecoration: "none", transition: "all 0.15s" }}
              className="hover:text-[var(--text)] hover:border-[var(--border-md)]">
              <Code2 size={10} /> GitHub
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
