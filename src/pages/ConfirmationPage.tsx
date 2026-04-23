import { Link, useParams } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { useTickets } from "../features/tickets/TicketsContext";
import { formatEventDate } from "../utils/date";
import { getPurchasedTicketById } from "../utils/eventLookups";

export function ConfirmationPage() {
  const { ticketId = "" } = useParams();
  const { tickets } = useTickets();
  const ticket = getPurchasedTicketById(ticketId, tickets);

  return (
    <section className="page-stack">
      <PageHeader
        eyebrow="Confirmacao"
        title="Compra confirmada"
        subtitle="A tela final mostrara o status da compra e o caminho para o ingresso digital."
      />
      <Card className="action-panel">
        <div>
          <strong className="success-title">Pagamento simulado aprovado</strong>
          <p>
            O ingresso {ticket?.id ?? ticketId} foi criado e ja pode ser acessado pelo perfil.
          </p>
        </div>
        {ticket ? (
          <dl className="summary-list">
            <div>
              <dt>Compra registrada em</dt>
              <dd>{formatEventDate(ticket.purchasedAt)}</dd>
            </div>
          </dl>
        ) : null}
        <div className="action-row">
          <Link className="button button--primary" to={`/ingressos/${ticket?.id ?? ticketId}`}>
            Abrir ingresso digital
          </Link>
          <Link className="button button--secondary" to="/perfil">
            Ir para o perfil
          </Link>
        </div>
      </Card>
    </section>
  );
}
