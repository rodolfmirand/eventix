import { Link } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { currentUser } from "../data/users";
import { ProfileSummary } from "../features/profile/ProfileSummary";
import { TicketCard } from "../features/tickets/TicketCard";
import { useTickets } from "../features/tickets/TicketsContext";
import { formatEventDate } from "../utils/date";
import { splitPurchasedTicketsByEventDate } from "../utils/eventLookups";

export function ProfilePage() {
  const { resetTickets, tickets } = useTickets();
  const { past, upcoming } = splitPurchasedTicketsByEventDate(tickets);

  return (
    <section className="page-stack">
      <PageHeader
        eyebrow="Perfil"
        title="Meus ingressos"
        subtitle={`Ingressos de ${currentUser.name}, separados entre proximos eventos e eventos passados.`}
      />

      <ProfileSummary
        email={currentUser.email}
        pastCount={past.length}
        totalTickets={tickets.length}
        upcomingCount={upcoming.length}
        userName={currentUser.name}
      />

      <div className="subtle-actions">
        <button className="subtle-actions__button" onClick={resetTickets} type="button">
          Limpar dados simulados de ingressos
        </button>
      </div>

      <div className="profile-sections">
        <Card className="ticket-list-section">
          <div className="section-heading">
            <h2>Proximos eventos</h2>
            <p>Ingressos em ordem cronologica para facilitar o acesso no dia do evento.</p>
          </div>
          {upcoming.map(({ category, event, seat, ticket }) => (
            <TicketCard
              categoryName={category.name}
              dateLabel={formatEventDate(event.startsAt)}
              eventTitle={event.title}
              key={ticket.id}
              seatLabel={`${seat.row}${seat.number}`}
              statusLabel="Proximo evento"
              statusVariant="success"
              ticketId={ticket.id}
            />
          ))}
        </Card>

        <Card className="ticket-list-section">
          <div className="section-heading">
            <h2>Eventos passados</h2>
            <p>Esta secao ficara separada para historico de compras ja utilizadas.</p>
          </div>
          {past.length > 0 ? (
            past.map(({ category, event, seat, ticket }) => (
              <TicketCard
                buttonVariant="ghost"
                categoryName={category.name}
                dateLabel={formatEventDate(event.startsAt)}
                eventTitle={event.title}
                key={ticket.id}
                seatLabel={`${seat.row}${seat.number}`}
                statusLabel="Evento passado"
                statusVariant="neutral"
                ticketId={ticket.id}
                tonedDown={true}
              />
            ))
          ) : (
            <p className="muted-copy">Nenhum evento passado no momento.</p>
          )}
        </Card>
      </div>

      <Link className="button button--secondary" to="/eventos">
        Ver eventos
      </Link>
    </section>
  );
}
