"use client";

import Image from "next/image";
import { companies } from "@/data/outcomes";

export default function OutcomesClientPage() {
  return (
    <>
      <section style={{ paddingTop: "100px", paddingBottom: "48px", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <span className="eyebrow">Where V:POG Leads</span>
          <h1 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text)" }}>
            Career Outcomes
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "10px", maxWidth: "520px", lineHeight: 1.75 }}>
            V:POG alumni go on to intern and work at leading game studios, tech companies, and universities. Here&rsquo;s where our members have landed.
          </p>
        </div>
      </section>

      {/* Logo showcase */}
      <section style={{ padding: "80px 0", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <span className="eyebrow">Alumni Employers</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: "var(--border)", borderRadius: "4px", overflow: "hidden", marginTop: "24px" }}>
            {companies.map(c => (
              <div key={c.id} style={{ background: "var(--surface)", padding: "40px 32px", display: "flex", flexDirection: "column", gap: "20px", transition: "background 0.2s" }}
                className="hover:bg-[var(--surface-2)]">
                <div style={{ background: c.logoBg, borderRadius: "4px", padding: c.logoBg === "#000000" ? "12px 16px" : "8px", display: "flex", alignItems: "center", justifyContent: "flex-start", height: "60px", width: "fit-content" }}>
                  <Image src={c.logo} alt={c.name} width={160} height={44}
                    style={{ objectFit: "contain", height: "36px", width: "auto", maxWidth: "160px" }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "1.1rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text)", marginBottom: "4px" }}>{c.name}</h3>
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.62rem", color: "var(--text-dim)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{c.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "var(--bg-2)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="eyebrow">Your Name Could Be Here</span>
          <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text)", marginBottom: "12px" }}>
            Build your portfolio with V:POG
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", maxWidth: "460px", margin: "0 auto 28px", lineHeight: 1.8 }}>
            Shipping real games with a team gives you projects to show — and opens doors to studios and companies you care about.
          </p>
          <a href="/get-involved" className="btn btn-gold">Get Involved</a>
        </div>
      </section>
    </>
  );
}
