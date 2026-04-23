import { Link } from "react-router-dom";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";

const previewEvents = [
  {
    id: "festival-luzes",
    date: "18 MAI",
    location: "Sao Paulo, SP",
    title: "Festival das Luzes",
  },
  {
    id: "tech-summit",
    date: "02 JUN",
    location: "Curitiba, PR",
    title: "Tech Summit Brasil",
  },
  {
    id: "noite-jazz",
    date: "15 JUN",
    location: "Belo Horizonte, MG",
    title: "Noite de Jazz",
  },
];

export function EventsPage() {
  return (
    <section className="page-stack">
      <PageHeader
        eyebrow="Catalogo"
        title="Eventos em destaque"
        subtitle="Base inicial para listagem, filtros e selecao de eventos da plataforma."
      />

      <div className="event-grid">
        {previewEvents.map((event) => (
          <Card className="event-card" key={event.id}>
            <div className="event-card__date">{event.date}</div>
            <div className="event-card__body">
              <Badge variant="neutral">{event.location}</Badge>
              <h2>{event.title}</h2>
              <p>
                Card temporario para validar a estrutura visual antes de conectar os dados
                simulados completos.
              </p>
            </div>
            <Link to={`/eventos/${event.id}`}>
              <Button variant="secondary">Ver detalhes</Button>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
