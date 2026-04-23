import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/Badge";
import { Card } from "../../components/ui/Card";
import type { Event } from "../../types/domain";
import { formatCurrency, formatEventDate, formatShortEventDate } from "../../utils/date";
import { getMinimumTicketPrice } from "../../utils/eventLookups";

type EventCardProps = {
  event: Event;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="event-card">
      <div className="event-card__media" aria-hidden="true">
        <span>{event.imageLabel}</span>
      </div>
      <div className="event-card__content">
        <div className="event-card__body">
          <div className="event-card__meta">
            <div className="event-card__date">{formatShortEventDate(event.startsAt)}</div>
            <Badge variant="neutral">
              {event.city}, {event.state}
            </Badge>
          </div>
          <h2>{event.title}</h2>
          <p>{formatEventDate(event.startsAt)}</p>
          <p className="event-card__venue">
            {event.venue} - {event.city}, {event.state}
          </p>
          <strong className="price-label">
            A partir de {formatCurrency(getMinimumTicketPrice(event))}
          </strong>
        </div>
        <div className="event-card__footer">
          <span>{event.category}</span>
          <span>{event.description.slice(0, 88)}...</span>
        </div>
        <Link className="button button--secondary" to={`/eventos/${event.id}`}>
          Ver detalhes
        </Link>
      </div>
    </Card>
  );
}
