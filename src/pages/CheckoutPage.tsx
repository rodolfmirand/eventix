import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { PurchaseSummary } from "../features/checkout/PurchaseSummary";
import { CheckoutForm } from "../features/checkout/CheckoutForm";
import { useTickets } from "../features/tickets/TicketsContext";
import { formatCurrency, formatEventDate } from "../utils/date";
import { getCategoryById, getEventById, getSeatById } from "../utils/eventLookups";

export function CheckoutPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { createTicket } = useTickets();
  const eventId = searchParams.get("evento") ?? "";
  const categoryId = searchParams.get("categoria") ?? "";
  const seatId = searchParams.get("assento") ?? "";
  const event = getEventById(eventId);
  const category = event ? getCategoryById(event, categoryId) : undefined;
  const seat = event ? getSeatById(event, seatId) : undefined;

  if (!event || !category || !seat) {
    return (
      <section className="page-stack">
        <PageHeader
          eyebrow="Pagamento"
          title="Compra indisponivel"
          subtitle="Nao foi possivel montar o checkout com os dados selecionados."
        />
        <Link className="button button--secondary" to="/eventos">
          Ver eventos
        </Link>
      </section>
    );
  }

  async function handleSubmit() {
    await new Promise((resolve) => window.setTimeout(resolve, 500));
    const ticket = createTicket({
      categoryId,
      eventId,
      seatId,
    });

    navigate(`/confirmacao/${ticket.id}`);
  }

  return (
    <section className="page-stack">
      <PageHeader
        eyebrow="Pagamento"
        title="Resumo da compra"
        subtitle="Revise os detalhes do pedido e conclua o pagamento com seguranca."
      />

      <div className="purchase-layout">
        <Card>
          <CheckoutForm onSubmit={handleSubmit} />
        </Card>

        <Card>
          <PurchaseSummary
            categoryName={category.name}
            dateLabel={formatEventDate(event.startsAt)}
            eventTitle={event.title}
            locationLabel={`${event.venue} - ${event.city}, ${event.state}`}
            seatLabel={`${seat.row}${seat.number}`}
            totalLabel={formatCurrency(category.price)}
          />
        </Card>
      </div>
    </section>
  );
}
