import { Link, useParams } from "react-router-dom";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { previewEvents, previewTicketCategories } from "../data/previewCatalog";

export function EventDetailsPage() {
  const { id = "evento" } = useParams();
  const event = previewEvents.find((item) => item.id === id) ?? previewEvents[0];

  return (
    <section className="page-stack">
      <PageHeader
        eyebrow="Detalhe do evento"
        title={event.title}
        subtitle="Compare categorias, precos e beneficios antes da escolha de assentos."
      />

      <div className="detail-layout">
        <Card className="detail-panel">
          <div className="event-hero">
            <span>{event.category}</span>
          </div>
          <div className="detail-panel__meta">
            <Badge variant="primary">{event.fullDate}</Badge>
            <Badge variant="accent">{event.location}</Badge>
          </div>
          <p>
            Evento demonstrativo usado para validar o fluxo de ticketing: apresentacao do evento,
            escolha de categoria, selecao de assento e pagamento simulado.
          </p>
        </Card>

        <Card className="ticket-options">
          <div className="section-heading">
            <h2>Categorias de ingresso</h2>
            <p>Escolha uma categoria para manter o contexto nas proximas etapas.</p>
          </div>

          {previewTicketCategories.map((category, index) => (
            <label className="ticket-option" key={category.id}>
              <input defaultChecked={index === 1} name="ticket-category" type="radio" />
              <span>
                <strong>{category.name}</strong>
                <small>{category.description}</small>
              </span>
              <span className="ticket-option__side">
                <Badge variant={category.status === "Poucos lugares" ? "accent" : "success"}>
                  {category.status}
                </Badge>
                <strong>{category.price}</strong>
              </span>
            </label>
          ))}

          <Link className="button button--primary" to={`/eventos/${id}/assentos`}>
            Escolher assento
          </Link>
        </Card>
      </div>
    </section>
  );
}
