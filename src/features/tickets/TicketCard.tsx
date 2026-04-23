import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/Badge";

type TicketCardProps = {
  buttonVariant?: "secondary" | "ghost";
  categoryName: string;
  dateLabel: string;
  eventTitle: string;
  seatLabel: string;
  statusLabel: string;
  statusVariant: "success" | "neutral";
  ticketId: string;
  tonedDown?: boolean;
};

export function TicketCard({
  buttonVariant = "secondary",
  categoryName,
  dateLabel,
  eventTitle,
  seatLabel,
  statusLabel,
  statusVariant,
  ticketId,
  tonedDown = false,
}: TicketCardProps) {
  return (
    <article className={tonedDown ? "ticket-row ticket-row--muted" : "ticket-row"}>
      <div>
        <Badge variant={statusVariant}>{statusLabel}</Badge>
        <h3>{eventTitle}</h3>
        <p>{dateLabel}</p>
      </div>
      <div className="ticket-row__meta">
        <span>{categoryName}</span>
        <strong>{seatLabel}</strong>
      </div>
      <Link className={`button button--${buttonVariant}`} to={`/ingressos/${ticketId}`}>
        Ver ingresso
      </Link>
    </article>
  );
}
