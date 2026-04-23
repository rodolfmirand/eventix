import { Link, useParams } from "react-router-dom";
import { Alert } from "../components/ui/Alert";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";

export function SeatSelectionPage() {
  const { id = "evento" } = useParams();

  return (
    <section className="page-stack">
      <PageHeader
        eyebrow="Assentos"
        title="Escolha seu lugar"
        subtitle="O mapa de assentos mostrara lugares livres, ocupados e selecionados."
      />

      <Card className="seat-placeholder">
        <Alert title="Mapa em preparacao" variant="info">
          O grid de assentos sera construido com legenda e bloqueio de assentos ocupados.
        </Alert>
        <div className="seat-placeholder__grid" aria-label="Previa visual do mapa de assentos">
          {Array.from({ length: 24 }, (_, index) => (
            <span
              className={index % 7 === 0 ? "seat-preview seat-preview--occupied" : "seat-preview"}
              key={index}
            />
          ))}
        </div>
        <Link to="/checkout">
          <Button>Continuar para pagamento</Button>
        </Link>
        <Link to={`/eventos/${id}`}>
          <Button variant="ghost">Voltar para detalhes</Button>
        </Link>
      </Card>
    </section>
  );
}
