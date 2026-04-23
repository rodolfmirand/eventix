import type { ReactNode } from "react";

import { Button } from "./Button";

type EmptyStateProps = {
  actionLabel?: string;
  children: ReactNode;
  onAction?: () => void;
  title: string;
};

export function EmptyState({ actionLabel, children, onAction, title }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <h2>{title}</h2>
      <p>{children}</p>
      {actionLabel && onAction ? (
        <Button variant="secondary" onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}
