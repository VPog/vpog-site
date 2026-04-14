"use client";

import { useState } from "react";
import { execBoard } from "@/data/exec";
import { ExecCard } from "@/components/ExecCard";

const PS2 = "'Press Start 2P', monospace";

export default function ExecClientPage() {
  const [tab, setTab] = useState<"current" | "alumni">("current");
  const current = execBoard.filter((m) => m.current);
  const alumni  = execBoard.filter((m) => !m.current);
  const list    = tab === "current" ? current : alumni;

  return (
    <>
      <section style={{ paddingTop: "100px", paddingBottom: "48px", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <span className="eyebrow">The Team</span>
          <h1 style={{ fontFamily: PS2, fontSize: "clamp(1rem, 2.8vw, 2rem)", lineHeight: 1.5, color: "var(--text)" }}>Exec Board</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "14px", maxWidth: "460px", lineHeight: 1.8 }}>
            The people keeping V:POG running — events, projects, community.
          </p>
        </div>
      </section>

      <section style={{ padding: "48px 0 96px", background: "var(--bg)" }}>
        <div className="container">
          {alumni.length > 0 && (
            <div style={{ display: "flex", gap: "1px", background: "var(--border)", borderRadius: "3px", width: "fit-content", marginBottom: "48px", overflow: "hidden" }}>
              {(["current", "alumni"] as const).map(t => (
                <button key={t} onClick={() => setTab(t)} style={{
                  fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase",
                  padding: "10px 20px", border: "none", cursor: "pointer", transition: "all 0.15s",
                  background: tab === t ? "var(--gold)" : "var(--surface)",
                  color: tab === t ? "#0d0d0d" : "var(--text-muted)",
                }}>
                  {t === "current" ? "Current" : "Alumni"}
                </button>
              ))}
            </div>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1px", background: "var(--border)", borderRadius: "4px", overflow: "hidden" }}>
            {list.map((m) => <ExecCard key={m.id} member={m} />)}
          </div>
        </div>
      </section>
    </>
  );
}
