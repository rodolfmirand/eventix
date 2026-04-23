import { Link } from "react-router-dom";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { currentUser } from "../data/users";
import { formatEventDate } from "../utils/date";
import { splitPurchasedTicketsByEventDate } from "../utils/eventLookups";

export function ProfilePage() {
  const { past, upcoming } = splitPurchasedTicketsByEventDate();

  return (
    <section className="page-stack">
      <PageHeader
        eyebrow="Perfil"
        title="Meus ingressos"
        subtitle={`Ingressos de ${currentUser.name}, separados entre proximos eventos e eventos passados.`}
      />

      <div className="profile-sections">
        <Card className="ticket-list-section">
          <div className="section-heading">
            <h2>Proximos eventos</h2>
            <p>Ingressos em ordem cronologica para facilitar o acesso no dia do evento.</p>
          </div>
          {upcoming.map(({ category, event, seat, ticket }) => (
            <article className="ticket-row" key={ticket.id}>
              <div>
                <Badge variant="success">Proximo evento</Badge>
                <h3>{event.title}</h3>
                <p>{formatEventDate(event.startsAt)}</p>
              </div>
              <div className="ticket-row__meta">
                <span>{category.name}</span>
                <strong>
                  {seat.row}
                  {seat.number}
                </strong>
              </div>
              <Link className="button button--secondary" to={`/ingressos/${ticket.id}`}>
                Ver ingresso
              </Link>
            </article>
          ))}
        </Card>

        <Card className="ticket-list-section">
          <div className="section-heading">
            <h2>Eventos passados</h2>
            <p>Esta secao ficara separada para historico de compras ja utilizadas.</p>
          </div>
          {past.length > 0 ? (
            past.map(({ category, event, seat, ticket }) => (
              <article className="ticket-row ticket-row--muted" key={ticket.id}>
                <div>
                  <Badge variant="neutral">Evento passado</Badge>
                  <h3>{event.title}</h3>
                  <p>{formatEventDate(event.startsAt)}</p>
                </div>
                <div className="ticket-row__meta">
                  <span>{category.name}</span>
                  <strong>
                    {seat.row}
                    {seat.number}
                  </strong>
                </div>
                <Link className="button button--ghost" to={`/ingressos/${ticket.id}`}>
                  Ver ingresso
                </Link>
              </article>
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
