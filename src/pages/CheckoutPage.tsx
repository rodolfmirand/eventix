import { Link } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { PageHeader } from "../components/ui/PageHeader";
import { purchasedTickets } from "../data/tickets";
import { formatCurrency } from "../utils/date";
import { getTicketDetails } from "../utils/eventLookups";

export function CheckoutPage() {
  const checkoutDetails = getTicketDetails(purchasedTickets[0]);

  if (!checkoutDetails) {
    return (
      <section className="page-stack">
        <PageHeader
          eyebrow="Pagamento"
          title="Compra indisponivel"
          subtitle="Nao foi possivel montar o resumo da compra simulada."
        />
        <Link className="button button--secondary" to="/eventos">
          Ver eventos
        </Link>
      </section>
    );
  }

  const { category, event, seat, ticket } = checkoutDetails;

  return (
    <section className="page-stack">
      <PageHeader
        eyebrow="Pagamento"
        title="Resumo da compra"
        subtitle="Nesta etapa entra o formulario de pagamento simulado e a revisao final do ingresso."
      />

      <div className="purchase-layout">
        <Card>
          <form className="form-stack">
            <Input label="Nome impresso no cartao" name="cardName" placeholder="Maria Silva" />
            <Input
              helperText="Pagamento apenas simulado para o trabalho."
              label="Numero do cartao"
              name="cardNumber"
              placeholder="0000 0000 0000 0000"
            />
            <div className="form-grid">
              <Input label="Validade" name="expiry" placeholder="MM/AA" />
              <Input label="CVV" name="cvv" placeholder="123" />
            </div>
            <Link className="button button--primary" to={`/confirmacao/${ticket.id}`}>
              Finalizar compra simulada
            </Link>
          </form>
        </Card>

        <Card className="purchase-summary">
          <div className="section-heading">
            <h2>Resumo do pedido</h2>
            <p>Preco total visivel antes da confirmacao.</p>
          </div>
          <dl className="summary-list">
            <div>
              <dt>Evento</dt>
              <dd>{event.title}</dd>
            </div>
            <div>
              <dt>Local</dt>
              <dd>
                {event.city}, {event.state}
              </dd>
            </div>
            <div>
              <dt>Categoria e assento</dt>
              <dd>
                {category.name} - {seat.row}
                {seat.number}
              </dd>
            </div>
            <div>
              <dt>Total</dt>
              <dd className="summary-total">{formatCurrency(category.price)}</dd>
            </div>
          </dl>
        </Card>
      </div>
    </section>
  );
}
