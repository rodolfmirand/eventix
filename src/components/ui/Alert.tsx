import type { ReactNode } from "react";

type AlertVariant = "info" | "success" | "warning" | "danger";

type AlertProps = {
  children: ReactNode;
  title?: string;
  variant?: AlertVariant;
};

export function Alert({ children, title, variant = "info" }: AlertProps) {
  return (
    <div className={`alert alert--${variant}`} role={variant === "danger" ? "alert" : "status"}>
      {title ? <strong className="alert__title">{title}</strong> : null}
      <div className="alert__content">{children}</div>
    </div>
  );
}
