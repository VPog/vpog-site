import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  external?: boolean;
  variant?: "cyan" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

const variantClass: Record<string, string> = {
  cyan: "btn btn-cyan",
  gold: "btn btn-gold",
  outline: "btn btn-outline",
  ghost: "btn btn-ghost",
};

const sizePad: Record<string, string> = {
  sm: "6px 14px",
  md: "11px 24px",
  lg: "14px 32px",
};

const sizeFontSize: Record<string, string> = {
  sm: "0.65rem",
  md: "0.75rem",
  lg: "0.82rem",
};

export function Button({ href, external, variant = "cyan", size = "md", children, onClick, className }: ButtonProps) {
  const cls = `${variantClass[variant]} ${className ?? ""}`;
  const style = { padding: sizePad[size], fontSize: sizeFontSize[size] };

  if (href) {
    return (
      <Link href={href} target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cls} style={style}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cls} style={style}>
      {children}
    </button>
  );
}
