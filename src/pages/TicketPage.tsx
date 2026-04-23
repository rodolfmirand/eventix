import { Link, useParams } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { currentUser } from "../data/users";
import { DigitalTicket } from "../features/tickets/DigitalTicket";
import { useTickets } from "../features/tickets/TicketsContext";
import { formatEventDate } from "../utils/date";
import { getPurchasedTicketById, getTicketDetails } from "../utils/eventLookups";

export function TicketPage() {
  const { ticketId = "ingresso" } = useParams();
  const { tickets } = useTickets();
  const ticket = getPurchasedTicketById(ticketId, tickets);
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

  const { category, event, seat, ticket: resolvedTicket } = ticketDetails;

  return (
    <section className="page-stack page-stack--narrow">
      <PageHeader
        eyebrow="Ingresso digital"
        title="Seu ingresso"
        subtitle="Esta tela exibira o QR Code e os detalhes do ingresso comprado."
      />

      <Card>
        <DigitalTicket
          categoryName={category.name}
          dateLabel={formatEventDate(event.startsAt)}
          eventTitle={event.title}
          locationLabel={`${event.venue} - ${event.city}, ${event.state}`}
          qrPayload={resolvedTicket.qrPayload}
          seatLabel={`${seat.row}${seat.number}`}
          ticketId={resolvedTicket.id}
          ticketOwner={currentUser.name}
        />
      </Card>
    </section>
  );
}
