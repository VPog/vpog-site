import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Play } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px", overflow: "hidden", transition: "border-color 0.2s, transform 0.2s" }}
      className="hover:border-[var(--border-md)] hover:-translate-y-1">
      <div style={{ height: "180px", background: `linear-gradient(135deg, ${project.color}18 0%, rgba(13,13,13,0) 100%)`, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
        {project.coverImage
          ? <Image src={project.coverImage} alt={project.title} width={280} height={140} style={{ objectFit: "contain", maxHeight: "140px", filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.5))" }} />
          : <div style={{ fontSize: "3rem" }}>🎮</div>
        }
      </div>
      <div style={{ padding: "20px" }}>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "10px" }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: project.color, background: `${project.color}15`, border: `1px solid ${project.color}30`, padding: "2px 8px", borderRadius: "2px" }}>
            {project.status}
          </span>
          {project.tags.slice(0, 2).map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "1.3rem", letterSpacing: "0.04em", color: "var(--text)", marginBottom: "6px" }}>{project.title}</h3>
        <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "14px" }}>{project.description}</p>
        <div style={{ display: "flex", gap: "8px" }}>
          <Link href={`/projects#${project.id}`} style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", color: project.color, textDecoration: "none", transition: "gap 0.15s" }}
            className="hover:gap-2">
            View <ArrowRight size={11} />
          </Link>
          {project.playUrl && (
            <Link href={project.playUrl} target="_blank" rel="noopener noreferrer"
              style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: "4px", fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-dim)", textDecoration: "none", transition: "color 0.15s" }}
              className="hover:text-[var(--text)]">
              <Play size={10} /> Play
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
