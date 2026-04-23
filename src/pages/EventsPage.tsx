import { Link } from "react-router-dom";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { PageHeader } from "../components/ui/PageHeader";
import { previewEvents } from "../data/previewCatalog";

export function EventsPage() {
  return (
    <section className="page-stack">
      <PageHeader
        eyebrow="Catalogo"
        title="Eventos em destaque"
        subtitle="Base inicial para listagem, filtros e selecao de eventos da plataforma."
      />

      <Card className="search-panel">
        <Input
          helperText="Pesquise por nome do evento, artista, palestra ou festival."
          label="Buscar evento"
          name="search"
          placeholder="Ex.: festival, jazz, tecnologia"
          type="search"
        />

        <div className="filter-row" aria-label="Filtros rapidos">
          <Button variant="secondary">Sao Paulo</Button>
          <Button variant="ghost">Este mes</Button>
          <Button variant="ghost">Ate R$ 150</Button>
          <Button variant="ghost">Limpar filtros</Button>
        </div>
      </Card>

      <div className="event-grid">
        {previewEvents.map((event) => (
          <Card className="event-card" key={event.id}>
            <div className="event-card__media" aria-hidden="true">
              <span>{event.category}</span>
            </div>
            <div className="event-card__body">
              <div className="event-card__meta">
                <div className="event-card__date">{event.date}</div>
                <Badge variant="neutral">{event.location}</Badge>
              </div>
              <h2>{event.title}</h2>
              <p>{event.fullDate}</p>
              <strong className="price-label">{event.priceFrom}</strong>
            </div>
            <Link className="button button--secondary" to={`/eventos/${event.id}`}>
              Ver detalhes
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
