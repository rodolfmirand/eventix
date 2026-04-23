import { Link, useParams } from "react-router-dom";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { formatCurrency, formatEventDate } from "../utils/date";
import { getEventById } from "../utils/eventLookups";

const categoryStatusLabels = {
  available: "Disponivel",
  limited: "Poucos lugares",
  "sold-out": "Esgotado",
};

export function EventDetailsPage() {
  const { id = "evento" } = useParams();
  const event = getEventById(id);

  if (!event) {
    return (
      <section className="page-stack">
        <PageHeader
          eyebrow="Evento"
          title="Evento nao encontrado"
          subtitle="Volte para o catalogo e escolha um evento disponivel."
        />
        <Link className="button button--secondary" to="/eventos">
          Ver eventos
        </Link>
      </section>
    );
  }

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
            <span>{event.imageLabel}</span>
          </div>
          <div className="detail-panel__meta">
            <Badge variant="primary">{formatEventDate(event.startsAt)}</Badge>
            <Badge variant="accent">
              {event.venue} - {event.city}, {event.state}
            </Badge>
          </div>
          <p>{event.description}</p>
        </Card>

        <Card className="ticket-options">
          <div className="section-heading">
            <h2>Categorias de ingresso</h2>
            <p>Escolha uma categoria para manter o contexto nas proximas etapas.</p>
          </div>

          {event.categories.map((category, index) => (
            <label className="ticket-option" key={category.id}>
              <input
                defaultChecked={index === 1}
                disabled={category.status === "sold-out"}
                name="ticket-category"
                type="radio"
              />
              <span>
                <strong>{category.name}</strong>
                <small>{category.description}</small>
              </span>
              <span className="ticket-option__side">
                <Badge
                  variant={
                    category.status === "limited"
                      ? "accent"
                      : category.status === "sold-out"
                        ? "danger"
                        : "success"
                  }
                >
                  {categoryStatusLabels[category.status]}
                </Badge>
                <strong>{formatCurrency(category.price)}</strong>
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
