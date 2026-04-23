import type { ReactNode } from "react";

type BadgeVariant = "neutral" | "primary" | "success" | "danger" | "accent";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
};

export function Badge({ children, variant = "neutral" }: BadgeProps) {
  return <span className={`badge badge--${variant}`}>{children}</span>;
}
