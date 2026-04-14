import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Join V:POG — sign up on AnchorLink, join our Discord, and come to a Monday meeting in Featheringhill Hall. All majors welcome.",
};

const PS2 = "'Press Start 2P', monospace";

const faq = [
  { q: "Do I need programming experience?", a: "No. V:POG welcomes artists, musicians, designers, and complete beginners. If you've never written a line of code, you're still welcome and useful." },
  { q: "How often do you meet?",            a: "Mondays at 5 PM in Featheringhill Hall during the semester. Every other Monday we have Chick-fil-A. We don't meet over breaks." },
  { q: "What engines do you use?",          a: "Mostly Unity. Some members use Godot or other tools. You're free to use whatever you're comfortable with." },
  { q: "Can I join mid-semester?",          a: "Yes. Reach out on Discord and we'll get you plugged in." },
  { q: "Is there a membership fee?",        a: "No fees. V:POG is free to join." },
  { q: "I'm a music or art major — is this really for me?", a: "Yes, genuinely. Great games need composers, sound designers, concept artists, and animators. We'd love to have you." },
];

export default function GetInvolvedPage() {
  return (
    <>
      <section style={{ paddingTop: "100px", paddingBottom: "56px", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <span className="eyebrow">Start Here</span>
          <h1 style={{ fontFamily: PS2, fontSize: "clamp(1rem, 2.8vw, 2rem)", lineHeight: 1.5, color: "var(--text)" }}>
            Get Involved
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "16px", maxWidth: "420px", lineHeight: 1.8 }}>
            Three steps. Less than five minutes. Come make games with us.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: "80px 0", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--border)", borderRadius: "4px", overflow: "hidden" }} className="steps-grid">
            {[
              { n: "01", title: "AnchorLink",  desc: "Vanderbilt's official student org platform. Signing up makes you an official member and gets you org updates.",           cta: "Open AnchorLink",    href: siteConfig.anchorLink, color: "var(--gold)"       },
              { n: "02", title: "Discord",     desc: "Everything happens here — announcements, team channels, dev-help, and the community. Introduce yourself in #new-members.", cta: "Join Discord Server", href: siteConfig.discord,    color: "var(--cyan)"       },
              { n: "03", title: "Show Up",     desc: "Meetings are Mondays at 5 PM in Featheringhill Hall. First meeting is zero-pressure. We have Chick-fil-A every other week.", cta: "See Calendar",       href: "/calendar",           color: "var(--text-muted)" },
            ].map(s => (
              <div key={s.n} style={{ background: "var(--surface)", padding: "36px 28px", display: "flex", flexDirection: "column" }}>
                <div style={{ fontFamily: PS2, fontSize: "1.4rem", color: s.color, lineHeight: 1, marginBottom: "20px" }}>{s.n}</div>
                <h3 style={{ fontFamily: PS2, fontSize: "0.65rem", color: s.color, marginBottom: "14px", lineHeight: 1.7 }}>{s.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.8, flex: 1, marginBottom: "24px" }}>{s.desc}</p>
                <Link href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="btn btn-outline" style={{ borderColor: s.color, color: s.color, justifyContent: "center" }}>
                  {s.cta} <ArrowUpRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social links */}
      <section style={{ padding: "64px 0", background: "var(--bg-2)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <span className="eyebrow">Find Us</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginTop: "20px" }}>
            {[
              { label: "Discord",    sub: "discord.gg/sWJFdhaJW9",     href: siteConfig.discord    },
              { label: "Instagram",  sub: "@vandy.pog",                  href: siteConfig.instagram  },
              { label: "GitHub",     sub: "github.com/VPog",             href: siteConfig.github     },
              { label: "AnchorLink", sub: "Official signup",             href: siteConfig.anchorLink },
            ].map(l => (
              <Link key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "3px", padding: "16px 20px", textDecoration: "none", transition: "border-color 0.15s" }}
                className="hover:border-[var(--gold)]">
                <div>
                  <div style={{ fontFamily: PS2, fontSize: "0.58rem", color: "var(--text)", lineHeight: 1.6, marginBottom: "4px" }}>{l.label}</div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "var(--text-dim)" }}>{l.sub}</div>
                </div>
                <ArrowUpRight size={14} style={{ color: "var(--text-dim)", flexShrink: 0, marginLeft: "12px" }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="container">
          <span className="eyebrow">FAQ</span>
          <h2 style={{ fontFamily: PS2, fontSize: "clamp(0.65rem, 1.5vw, 0.9rem)", lineHeight: 1.8, color: "var(--text)", marginBottom: "40px" }}>
            Common Questions
          </h2>
          <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)", borderRadius: "4px", overflow: "hidden" }}>
            {faq.map(item => (
              <div key={item.q} style={{ background: "var(--surface)", padding: "24px 28px" }}>
                <h4 style={{ fontFamily: PS2, fontSize: "0.58rem", color: "var(--text)", marginBottom: "10px", lineHeight: 1.7 }}>
                  <span style={{ color: "var(--gold)", marginRight: "8px" }}>Q.</span>{item.q}
                </h4>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.8, paddingLeft: "22px" }}>{item.a}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "40px", padding: "28px 32px", background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "3px solid var(--gold)", borderRadius: "3px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <span className="eyebrow" style={{ fontSize: "0.58rem" }}>Still have questions?</span>
              <p style={{ fontFamily: PS2, fontSize: "0.6rem", color: "var(--text)", lineHeight: 1.7 }}>Drop by Discord.<br />We&rsquo;re friendly.</p>
            </div>
            <Link href={siteConfig.discord} target="_blank" rel="noopener noreferrer" className="btn btn-cyan">
              Join Discord <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
