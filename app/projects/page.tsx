import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Users } from "lucide-react";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Games made by Vanderbilt Programmers of Gaming — Coffeepocalypse and Baby Bear Summer Camp, built with Unity.",
};

export default function ProjectsPage() {
  return (
    <>
      <section style={{ paddingTop: "100px", paddingBottom: "48px", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <span className="eyebrow">What We Build</span>
          <h1 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text)" }}>
            Projects
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "10px", maxWidth: "480px", lineHeight: 1.75 }}>
            Real games, shipped by real students. From semester-long projects to fully polished builds.
          </p>
        </div>
      </section>

      <section style={{ padding: "64px 0 96px", background: "var(--bg)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)", borderRadius: "4px", overflow: "hidden" }}>
            {projects.map((project, idx) => (
              <article key={project.id} id={project.id}
                style={{ display: "grid", gridTemplateColumns: idx % 2 === 0 ? "460px 1fr" : "1fr 460px", background: "var(--bg)", minHeight: "380px" }}
                className="project-row">

                {/* Left image panel (even) */}
                {idx % 2 === 0 && (
                  <div style={{ background: `linear-gradient(135deg, ${project.color}14 0%, rgba(13,13,13,0) 100%)`, borderRight: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", padding: "48px", minHeight: "380px" }}>
                    {project.coverImage ? (
                      <Image src={project.coverImage} alt={project.title} width={380} height={240}
                        style={{ objectFit: "contain", maxWidth: "100%", filter: "drop-shadow(0 8px 40px rgba(0,0,0,0.6))" }} />
                    ) : (
                      /* Clean empty placeholder — no emoji */
                      <div style={{ width: "100%", maxWidth: "320px", aspectRatio: "16/9", background: "var(--surface)", border: "1px dashed var(--border-md)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)" }}>Screenshot Coming Soon</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Content */}
                <div style={{ padding: "48px" }}>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                    <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: project.color, background: `${project.color}18`, border: `1px solid ${project.color}33`, padding: "3px 10px", borderRadius: "2px" }}>
                      {project.status}
                    </span>
                    {project.tags.slice(0, 3).map(t => <span key={t} className="tag">{t}</span>)}
                  </div>

                  <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "1.5rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text)", marginBottom: "6px" }}>
                    {project.title}
                  </h2>
                  <p style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.72rem", color: "var(--gold)", fontStyle: "italic", marginBottom: "20px", letterSpacing: "0.04em" }}>
                    {project.tagline}
                  </p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.85, marginBottom: "32px", maxWidth: "480px" }}>
                    {project.longDescription}
                  </p>

                  <div style={{ display: "flex", gap: "32px", marginBottom: "28px", flexWrap: "wrap" }}>
                    {[
                      { label: "Engine", value: project.engine },
                      { label: "Genre",  value: project.genre  },
                      { label: "Year",   value: String(project.year) },
                    ].map(m => (
                      <div key={m.label}>
                        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.56rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "2px" }}>{m.label}</div>
                        <div style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "var(--text)" }}>{m.value}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    {project.playUrl && (
                      <Link href={project.playUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                        Play Now ↗
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        <ArrowUpRight size={13} /> GitHub
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right image panel (odd) */}
                {idx % 2 !== 0 && (
                  <div style={{ background: `linear-gradient(135deg, rgba(13,13,13,0) 0%, ${project.color}14 100%)`, borderLeft: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", padding: "48px", minHeight: "380px" }}>
                    {project.coverImage ? (
                      <Image src={project.coverImage} alt={project.title} width={380} height={240}
                        style={{ objectFit: "contain", maxWidth: "100%", filter: "drop-shadow(0 8px 40px rgba(0,0,0,0.6))" }} />
                    ) : (
                      <div style={{ width: "100%", maxWidth: "320px", aspectRatio: "16/9", background: "var(--surface)", border: "1px dashed var(--border-md)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)" }}>Screenshot Coming Soon</span>
                      </div>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .project-row { grid-template-columns: 1fr !important; }
          .project-row > *:first-child { border-right: none !important; border-left: none !important; border-bottom: 1px solid var(--border); min-height: 220px !important; padding: 32px !important; }
        }
      `}</style>
    </>
  );
}
