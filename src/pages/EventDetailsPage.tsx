import { Link, useParams } from "react-router-dom";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";

export function EventDetailsPage() {
  const { id = "evento" } = useParams();

  return (
    <section className="page-stack">
      <PageHeader
        eyebrow="Detalhe do evento"
        title="Escolha a categoria do ingresso"
        subtitle="Esta pagina vai comparar categorias, precos e beneficios antes da escolha de assentos."
      />
      <Card className="detail-panel">
        <div className="detail-panel__meta">
          <Badge variant="primary">Evento #{id}</Badge>
          <Badge variant="accent">Categorias em breve</Badge>
        </div>
        <p>
          A proxima etapa deste bloco sera conectar os dados simulados para exibir descricao,
          local, data, categorias e chamada para escolher assentos.
        </p>
        <Link to={`/eventos/${id}/assentos`}>
          <Button>Escolher assento</Button>
        </Link>
      </Card>
    </section>
  );
}
