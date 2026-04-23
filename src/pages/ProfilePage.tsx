import { Link } from "react-router-dom";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { previewPurchase } from "../data/previewCatalog";

export function ProfilePage() {
  return (
    <section className="page-stack">
      <PageHeader
        eyebrow="Perfil"
        title="Meus ingressos"
        subtitle="Aqui os ingressos serao separados entre proximos eventos e eventos passados."
      />

      <div className="profile-sections">
        <Card className="ticket-list-section">
          <div className="section-heading">
            <h2>Proximos eventos</h2>
            <p>Ingressos em ordem cronologica para facilitar o acesso no dia do evento.</p>
          </div>
          <article className="ticket-row">
            <div>
              <Badge variant="success">Proximo evento</Badge>
              <h3>{previewPurchase.event}</h3>
              <p>{previewPurchase.date}</p>
            </div>
            <div className="ticket-row__meta">
              <span>{previewPurchase.category}</span>
              <strong>{previewPurchase.seat}</strong>
            </div>
            <Link className="button button--secondary" to={`/ingressos/${previewPurchase.ticketId}`}>
              Ver ingresso
            </Link>
          </article>
        </Card>

        <Card className="ticket-list-section">
          <div className="section-heading">
            <h2>Eventos passados</h2>
            <p>Esta secao ficara separada para historico de compras ja utilizadas.</p>
          </div>
          <p className="muted-copy">Nenhum evento passado no momento.</p>
        </Card>
      </div>

      <Link className="button button--secondary" to="/eventos">
        Ver eventos
      </Link>
    </section>
  );
}
