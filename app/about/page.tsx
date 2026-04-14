import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about V:POG — Vanderbilt's student game development organization for programmers, artists, designers, and musicians.",
};

const PS2 = "'Press Start 2P', monospace";

export default function AboutPage() {
  return (
    <>
      <section style={{ paddingTop: "100px", paddingBottom: "56px", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <span className="eyebrow">About</span>
          <h1 style={{ fontFamily: PS2, fontSize: "clamp(1rem, 2.8vw, 1.9rem)", lineHeight: 1.6, color: "var(--text)", maxWidth: "680px" }}>
            A student game studio<br />at Vanderbilt
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: "80px 0", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }} className="about-grid">
            <div>
              <span className="eyebrow">Mission</span>
              <h2 style={{ fontFamily: PS2, fontSize: "clamp(0.75rem, 1.8vw, 1.1rem)", lineHeight: 1.8, color: "var(--text)", marginBottom: "28px" }}>
                Make games.<br /><span style={{ color: "var(--gold)" }}>Build together.</span>
              </h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "16px", fontSize: "0.925rem" }}>
                V:POG is Vanderbilt&rsquo;s student organization for game development. We give students of all backgrounds a place to collaborate on real games — from semester-long projects to polished builds.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "16px", fontSize: "0.925rem" }}>
                We believe making games is one of the best ways to learn — programming, design thinking, art direction, audio engineering, project management. Game development touches everything.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.9, fontSize: "0.925rem" }}>
                Whether you want to work in the games industry, grow your technical skills, or just make something fun — V:POG is where you start.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)", borderRadius: "4px", overflow: "hidden" }}>
              {[
                { label: "Learn by doing",  desc: "Every semester, we ship real games. That&rsquo;s how you learn.",               color: "var(--cyan)"       },
                { label: "All disciplines", desc: "Tech, art, music, design — great games need all of them.",                      color: "var(--gold)"       },
                { label: "Ship real games", desc: "We don&rsquo;t just talk about games — we make them.",                          color: "var(--gold-light)" },
                { label: "Build your portfolio", desc: "Playable projects you can actually show employers.",                       color: "var(--cyan)"       },
              ].map(v => (
                <div key={v.label} style={{ background: "var(--surface)", padding: "22px 28px", borderLeft: `3px solid ${v.color}` }}>
                  <div style={{ fontFamily: PS2, fontSize: "0.6rem", color: "var(--text)", marginBottom: "8px", lineHeight: 1.6 }}>{v.label}</div>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: v.desc }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who should join */}
      <section style={{ padding: "80px 0", background: "var(--bg-2)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <span className="eyebrow">Who Should Join</span>
          <h2 style={{ fontFamily: PS2, fontSize: "clamp(0.7rem, 1.6vw, 1rem)", lineHeight: 1.8, color: "var(--text)", marginBottom: "40px", maxWidth: "600px" }}>
            If you&rsquo;re curious about games,<br />you belong here.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--border)", borderRadius: "4px", overflow: "hidden" }} className="who-grid">
            {[
              { emoji: "</>", title: "Programmers",    desc: "Game logic, physics, AI, graphics, tools. Unity C#, Godot GDScript, C++ Unreal.", tags: ["Unity", "Godot", "C#", "C++"] },
              { emoji: "🖌", title: "Artists",        desc: "Character design, environments, pixel art, 3D modeling, animation, UI/UX.",        tags: ["Procreate", "Blender", "Aseprite"] },
              { emoji: "♫", title: "Musicians",      desc: "Original soundtracks, SFX, dynamic audio systems. Games need your ear.",           tags: ["FMOD", "Ableton", "FL Studio"] },
              { emoji: "✧", title: "Designers",     desc: "Mechanics, level design, narrative design, puzzle design, UX.",                    tags: ["Mechanics", "Levels", "Narrative"] },
              { emoji: "𖧧", title: "Beginners",      desc: "Never made a game? We run intro workshops every semester. Just show up.",          tags: ["Workshops", "Mentorship"] },
              { emoji: "♡", title: "All Majors",     desc: "CS, Engineering, Music, Art, HOD, Pre-med — all majors, all years.",              tags: ["All Years", "No XP Needed"] },
            ].map(item => (
              <div key={item.title} style={{ background: "var(--surface)", padding: "28px" }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "12px" }}>{item.emoji}</div>
                <h3 style={{ fontFamily: PS2, fontSize: "0.6rem", color: "var(--text)", marginBottom: "10px", lineHeight: 1.7 }}>{item.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "14px" }}>{item.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: PS2, fontSize: "clamp(0.7rem, 1.6vw, 1rem)", lineHeight: 1.8, color: "var(--text)", marginBottom: "16px" }}>
            Sound like your<br />kind of place?
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "28px", fontSize: "0.9rem" }}>First meeting is low-pressure. Come hang out.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/get-involved" className="btn btn-gold">Get Involved <ArrowRight size={12} /></Link>
            <Link href="/projects" className="btn btn-outline">See Our Games</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .who-grid   { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .who-grid   { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
