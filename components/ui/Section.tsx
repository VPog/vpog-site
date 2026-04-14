import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
};

export function Section({ children, className, id, style }: SectionProps) {
  return (
    <section id={id} className={className} style={{ padding: "80px 0", ...style }}>
      <div className="container">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
};

export function SectionHeader({ eyebrow, title, subtitle, center }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: "40px", textAlign: center ? "center" : "left", maxWidth: center ? "560px" : "none", margin: center ? "0 auto 40px" : "0 0 40px" }}>
      {eyebrow && (
        <span className="eyebrow">{eyebrow}</span>
      )}
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.04em", color: "var(--text)", marginBottom: subtitle ? "12px" : 0 }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: "var(--text-muted)", fontSize: "0.925rem", lineHeight: 1.75, maxWidth: "520px", margin: center ? "0 auto" : undefined }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
