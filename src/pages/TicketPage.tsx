import { Link, useParams } from "react-router-dom";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { currentUser } from "../data/users";
import { formatEventDate } from "../utils/date";
import { getPurchasedTicketById, getTicketDetails } from "../utils/eventLookups";

export function TicketPage() {
  const { ticketId = "ingresso" } = useParams();
  const ticket = getPurchasedTicketById(ticketId);
  const ticketDetails = ticket ? getTicketDetails(ticket) : undefined;

  if (!ticketDetails) {
    return (
      <section className="page-stack page-stack--narrow">
        <PageHeader
          eyebrow="Ingresso digital"
          title="Ingresso nao encontrado"
          subtitle="Volte ao perfil para acessar seus ingressos disponiveis."
        />
        <Link className="button button--secondary" to="/perfil">
          Ir para o perfil
        </Link>
      </section>
    );
  }

  const { category, event, seat } = ticketDetails;

  return (
    <section className="page-stack page-stack--narrow">
      <PageHeader
        eyebrow="Ingresso digital"
        title="Seu ingresso"
        subtitle="Esta tela exibira o QR Code e os detalhes do ingresso comprado."
      />

      <Card className="digital-ticket">
        <Badge variant="primary">#{ticketId}</Badge>
        <div className="qr-placeholder" aria-label="Espaco reservado para QR Code">
          QR
        </div>
        <div>
          <h2>{event.title}</h2>
          <p>Apresente este QR Code na entrada do evento.</p>
        </div>
        <dl className="ticket-details">
          <div>
            <dt>Titular</dt>
            <dd>{currentUser.name}</dd>
          </div>
          <div>
            <dt>Data</dt>
            <dd>{formatEventDate(event.startsAt)}</dd>
          </div>
          <div>
            <dt>Local</dt>
            <dd>
              {event.venue} - {event.city}, {event.state}
            </dd>
          </div>
          <div>
            <dt>Categoria</dt>
            <dd>{category.name}</dd>
          </div>
          <div>
            <dt>Assento</dt>
            <dd>
              {seat.row}
              {seat.number}
            </dd>
          </div>
        </dl>
      </Card>
    </section>
  );
}
