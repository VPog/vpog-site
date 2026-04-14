"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { img } from "@/lib/basepath";

const navLinks = [
  { href: "/",             label: "Home" },
  { href: "/about",        label: "About" },
  { href: "/projects",     label: "Projects" },
  { href: "/exec",         label: "Team" },
  { href: "/calendar",     label: "Calendar" },
  { href: "/get-involved", label: "Join" },
];

export function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname              = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(13,13,13,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", height: "64px", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          <Image
            src={img("/images/vpog-logo.jpg")}
            alt="V:POG Logo"
            width={40}
            height={40}
            style={{ borderRadius: "6px", objectFit: "cover" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }} className="hidden md:flex">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link key={l.href} href={l.href} style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "6px 14px",
                borderRadius: "3px",
                color: active ? "var(--gold)" : "var(--text-muted)",
                background: active ? "var(--gold-dim)" : "transparent",
                textDecoration: "none",
                transition: "all 0.15s",
              }}
              className="hover:text-[var(--text)]">
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Discord CTA */}
        <Link href={siteConfig.discord} target="_blank" rel="noopener noreferrer"
          className="btn btn-cyan hidden md:inline-flex"
          style={{ fontSize: "0.68rem", padding: "8px 18px" }}>
          Discord ↗
        </Link>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden"
          style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", padding: "4px" }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", padding: "16px 24px 20px" }}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{
                display: "block",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "10px 0",
                color: pathname === l.href ? "var(--gold)" : "var(--text-muted)",
                borderBottom: "1px solid var(--border)",
                textDecoration: "none",
              }}>
              {l.label}
            </Link>
          ))}
          <Link href={siteConfig.discord} target="_blank" onClick={() => setOpen(false)}
            className="btn btn-cyan" style={{ marginTop: "16px", width: "100%", justifyContent: "center" }}>
            Join Discord ↗
          </Link>
        </div>
      )}
    </header>
  );
}
