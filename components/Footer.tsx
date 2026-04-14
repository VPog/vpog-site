import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { img } from "@/lib/basepath";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", padding: "48px 0 32px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "40px", marginBottom: "40px" }}
          className="footer-grid">

          {/* Brand */}
          <div>
            <Image src={img("/images/vpog-logo.jpg")} alt="V:POG" width={44} height={44}
              style={{ borderRadius: "6px", marginBottom: "14px" }} />
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "240px" }}>
              Vanderbilt University&rsquo;s student game development organization.
            </p>
          </div>

          {/* Nav */}
          <div>
            <span className="eyebrow" style={{ marginBottom: "14px", display: "block" }}>Navigate</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {["/about","/projects","/exec","/calendar","/get-involved"].map((href) => (
                <Link key={href} href={href}
                  style={{ color: "var(--text-muted)", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.15s" }}
                  className="hover:text-[var(--gold)]">
                  {href.replace("/","").replace("-"," ") || "home"}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <span className="eyebrow" style={{ marginBottom: "14px", display: "block" }}>Connect</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "Discord", href: siteConfig.discord },
                { label: "Instagram", href: siteConfig.instagram },
                { label: "GitHub", href: siteConfig.github },
                { label: "AnchorLink", href: siteConfig.anchorLink },
              ].map((l) => (
                <Link key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  style={{ color: "var(--text-muted)", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.15s" }}
                  className="hover:text-[var(--cyan)]">
                  {l.label} ↗
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "var(--text-dim)" }}>
            © {year} Vanderbilt Programmers of Gaming
          </span>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "var(--text-dim)" }}>
            Nashville, TN
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
