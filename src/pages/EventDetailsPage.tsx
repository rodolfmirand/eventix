import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { EventCategorySelector } from "../features/events/EventCategorySelector";
import { formatCurrency, formatEventDate } from "../utils/date";
import { getEventById } from "../utils/eventLookups";

export function EventDetailsPage() {
  const { id = "evento" } = useParams();
  const event = getEventById(id);
  const defaultCategoryId = useMemo(
    () => event?.categories.find((category) => category.status !== "sold-out")?.id ?? "",
    [event],
  );
  const [selectedCategoryId, setSelectedCategoryId] = useState(defaultCategoryId);

  useEffect(() => {
    setSelectedCategoryId(defaultCategoryId);
  }, [defaultCategoryId]);

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

  const selectedCategory =
    event.categories.find((category) => category.id === selectedCategoryId) ?? event.categories[0];

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

          <EventCategorySelector
            categories={event.categories}
            eventId={event.id}
            onSelect={setSelectedCategoryId}
            selectedCategoryId={selectedCategory.id}
          />

          <div className="category-summary">
            <div className="section-heading">
              <h2>Categoria selecionada</h2>
              <p>Preco e beneficios visiveis antes da escolha do assento.</p>
            </div>
            <dl className="summary-list">
              <div>
                <dt>Categoria</dt>
                <dd>{selectedCategory.name}</dd>
              </div>
              <div>
                <dt>Valor</dt>
                <dd className="summary-total">{formatCurrency(selectedCategory.price)}</dd>
              </div>
            </dl>
          </div>
        </Card>
      </div>
    </section>
  );
}
