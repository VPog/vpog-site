import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { companies } from "@/data/outcomes";
import { siteConfig } from "@/data/site";
import { img } from "@/lib/basepath";

const PS2 = "'Press Start 2P', monospace";

export default function HomePage() {
  const featured = projects.find((p) => p.featured)!;

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", background: "var(--bg)" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(26,169,216,0.08) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "-40px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "120px", paddingBottom: "80px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Image src={img("/images/vpog-logo.jpg")} alt="V:POG" width={64} height={64}
              style={{ borderRadius: "10px", boxShadow: "0 0 40px rgba(26,169,216,0.3)" }} />
          </div>

          <h1 style={{ fontFamily: PS2, fontSize: "clamp(1.1rem, 3.2vw, 2.4rem)", lineHeight: 1.5, color: "var(--text)", marginBottom: "16px", maxWidth: "700px" }}>
            Vanderbilt<br />
            <span style={{ color: "var(--cyan)" }}>Programmers</span><br />
            <span style={{ color: "var(--gold)" }}>of Gaming</span>
          </h1>

          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.08em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "40px", lineHeight: 1.8 }}>
            Make games.{" "}
            <span style={{ color: "var(--gold)" }}>Build together.</span>
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "64px" }}>
            <Link href={siteConfig.anchorLink} target="_blank" rel="noopener noreferrer" className="btn btn-cyan">Join the Org</Link>
            <Link href="/projects" className="btn btn-outline">View Projects <ArrowRight size={12} /></Link>
            <Link href={siteConfig.discord} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Discord ↗</Link>
          </div>

          <div style={{ display: "flex", gap: "48px", flexWrap: "wrap" }}>
            {[
              { value: "100+", label: "Members",        color: "var(--cyan)" },
              { value: "All",  label: "Majors Welcome", color: "var(--gold)" },
              { value: "Free", label: "To Join",        color: "var(--text-muted)" },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: PS2, fontSize: "clamp(1rem, 2.5vw, 1.6rem)", color: s.color, lineHeight: 1.4, marginBottom: "8px" }}>{s.value}</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: "var(--text-dim)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMPANY LOGO TICKER ══════════════════════════════ */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-2)", overflow: "hidden" }}>
        <div style={{ padding: "20px 0", overflow: "hidden" }}>
          <div className="ticker-track">
            {[...companies, ...companies, ...companies, ...companies].map((c, i) => (
              <div key={`${c.id}-${i}`} style={{ display: "flex", alignItems: "center", padding: "0 56px", borderRight: "1px solid var(--border)", height: "64px", flexShrink: 0 }}>
                <div style={{ background: c.logoBg, borderRadius: "3px", padding: c.logoBg === "#ffffff" ? "6px 14px" : "4px", display: "flex", alignItems: "center", height: "40px" }}>
                  <Image src={img(c.logo)} alt={c.name} width={130} height={34}
                    style={{ objectFit: "contain", height: "28px", width: "auto", maxWidth: "130px" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURED PROJECT ══════════════════════════════════ */}
      <section style={{ padding: "96px 0", background: "var(--bg)" }}>
        <div className="container">
          <span className="eyebrow">Featured Project</span>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px", overflow: "hidden" }} className="project-featured-grid">
            <div style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.1), rgba(26,169,216,0.06))", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "320px", padding: "48px", borderRight: "1px solid var(--border)" }}>
              <Image src={img("/images/coffeepocalypse-logo.png")} alt="Coffeepocalypse" width={340} height={220}
                style={{ objectFit: "contain", maxWidth: "100%", filter: "drop-shadow(0 8px 40px rgba(0,0,0,0.45))" }} />
            </div>
            <div style={{ padding: "40px" }}>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold)", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", padding: "3px 10px", borderRadius: "2px" }}>In Development</span>
                <span className="tag">Unity</span><span className="tag">C#</span>
              </div>
              <h2 style={{ fontFamily: PS2, fontSize: "clamp(0.85rem, 2vw, 1.4rem)", lineHeight: 1.6, color: "var(--text)", marginBottom: "12px" }}>
                Coffeepocalypse
              </h2>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", color: "var(--gold)", fontStyle: "italic", marginBottom: "16px", letterSpacing: "0.04em", lineHeight: 1.7 }}>
                Run a cafe by day. Survive by night.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.85, marginBottom: "28px" }}>
                A post-apocalyptic cafe management and survival game. Keep your customers caffeinated during the day, then scrounge for supplies in the ruins after dark.
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <Link href="/projects" className="btn btn-gold">See Project <ArrowRight size={12} /></Link>
                <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub ↗</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MEETING INFO ══════════════════════════════════════ */}
      <section style={{ padding: "96px 0", background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <span className="eyebrow">When We Meet</span>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }} className="meeting-grid">
            <div>
              <h2 style={{ fontFamily: PS2, fontSize: "clamp(0.85rem, 2vw, 1.3rem)", lineHeight: 1.7, color: "var(--text)", marginBottom: "24px" }}>
                Mondays<br /><span style={{ color: "var(--cyan)" }}>at 5 PM</span>
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.9, marginBottom: "16px" }}>
                We meet weekly during the semester in <span style={{ color: "var(--text)" }}>Featheringhill Hall</span>. Every other Monday we bring <span style={{ color: "var(--gold)" }}>Chick-fil-A </span> — so you&rsquo;ve got extra reason to show up.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.9 }}>
                We hold a <span style={{ color: "var(--cyan)" }}>social event</span> every last Monday of the semester. We&rsquo;ll also be at <span style={{ color: "var(--text)" }}>Vanderbilt&rsquo;s Org Fair </span> in the fall — come find us there. We don&rsquo;t meet over breaks.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)", borderRadius: "4px", overflow: "hidden" }}>
              {[
                { icon: "", label: "Weekly Meetings",       detail: "Mondays · 5 PM · Featheringhill Hall", color: "var(--cyan)" },
                { icon: "", label: "Chick-fil-A Mondays",   detail: "Every other Monday meeting",            color: "var(--gold)" },
                { icon: "", label: "End-of-Semester Social",detail: "Last Monday of each semester",          color: "var(--gold-light)" },
                { icon: "", label: "Fall Org Fair",         detail: "Find us at Vanderbilt's org fair",      color: "var(--cyan)" },
              ].map(item => (
                <div key={item.label} style={{ background: "var(--surface)", padding: "18px 24px", display: "flex", gap: "14px", alignItems: "flex-start", borderLeft: `3px solid ${item.color}` }}>
                  <span style={{ fontSize: "1.2rem", flexShrink: 0, marginTop: "2px" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "var(--text)", marginBottom: "3px" }}>{item.label}</div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "var(--text-dim)", letterSpacing: "0.04em" }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT WE DO ════════════════════════════════════════ */}
      <section style={{ padding: "96px 0", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <span className="eyebrow">What We Do</span>
          <h2 style={{ fontFamily: PS2, fontSize: "clamp(0.75rem, 1.8vw, 1.15rem)", lineHeight: 1.8, color: "var(--text)", marginBottom: "48px", maxWidth: "560px" }}>
            Build real games<br />from scratch
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--border)", borderRadius: "4px", overflow: "hidden" }} className="pillars-grid">
            {[
              { label: "Tech",      icon: "</>", desc: "Unity, Godot, C#, C++ — write the code that makes worlds run.",            color: "var(--cyan)"       },
              { label: "Art",       icon: "🖌", desc: "Concept art, pixel sprites, 3D modeling, animation, UI design.",           color: "var(--gold)"       },
              { label: "Music",     icon: "♫", desc: "Original soundtracks, SFX, dynamic audio — give games their soul.",        color: "var(--gold-light)" },
              { label: "Design",    icon: "✧", desc: "Mechanics, level design, narrative, UX — shape how players feel.",         color: "var(--cyan)"       },
              { label: "All Majors",icon: "♡", desc: "CS, Engineering, Music, Art, HOD, Pre-med. Everyone has a role.",          color: "var(--gold)"       },
              { label: "Beginners", icon: "𖧧", desc: "Never made a game? We run workshops every semester. Just show up.",        color: "var(--text-muted)" },
            ].map(p => (
              <div key={p.label} style={{ background: "var(--bg-2)", padding: "28px 32px", transition: "background 0.2s" }} className="hover:bg-[var(--surface)]">
                <h3 style={{ fontFamily: PS2, fontSize: "0.75rem", color: p.color, marginBottom: "14px", lineHeight: 1.8 }}>
                  {p.icon} {p.label}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.75 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ JOIN CTA ══════════════════════════════════════════ */}
      <section style={{ padding: "96px 0", background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ padding: "48px", background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "3px solid var(--gold)", borderRadius: "4px", display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="cta-grid">
            <div>
              <span className="eyebrow">Open to All Vanderbilt Students</span>
              <h2 style={{ fontFamily: PS2, fontSize: "clamp(0.7rem, 1.6vw, 1.05rem)", lineHeight: 1.8, color: "var(--text)", marginBottom: "16px" }}>
                Ready to make<br />your first game?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", maxWidth: "460px", lineHeight: 1.85 }}>
                Sign up on AnchorLink, join our Discord, and come to a Monday meeting. No experience needed.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end" }}>
              <Link href={siteConfig.anchorLink} target="_blank" rel="noopener noreferrer" className="btn btn-gold">Join on AnchorLink</Link>
              <Link href={siteConfig.discord} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Join Discord ↗</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .project-featured-grid { grid-template-columns: 1fr !important; }
          .project-featured-grid > div:first-child { border-right: none !important; border-bottom: 1px solid var(--border); min-height: 200px !important; padding: 32px !important; }
          .meeting-grid  { grid-template-columns: 1fr !important; }
          .pillars-grid  { grid-template-columns: 1fr 1fr !important; }
          .cta-grid      { grid-template-columns: 1fr !important; }
          .cta-grid > div:last-child { align-items: flex-start !important; flex-direction: row !important; flex-wrap: wrap !important; }
        }
        @media (max-width: 480px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
