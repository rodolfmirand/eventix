import { Link } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { previewPurchase } from "../data/previewCatalog";

export function ConfirmationPage() {
  return (
    <section className="page-stack">
      <PageHeader
        eyebrow="Confirmacao"
        title="Compra confirmada"
        subtitle="A tela final mostrara o status da compra e o caminho para o ingresso digital."
      />
      <Card className="action-panel">
        <div>
          <strong className="success-title">Pagamento simulado aprovado</strong>
          <p>
            O ingresso {previewPurchase.ticketId} foi criado e ja pode ser acessado pelo perfil.
          </p>
        </div>
        <div className="action-row">
          <Link className="button button--primary" to={`/ingressos/${previewPurchase.ticketId}`}>
            Abrir ingresso digital
          </Link>
          <Link className="button button--secondary" to="/perfil">
            Ir para o perfil
          </Link>
        </div>
      </Card>
    </section>
  );
}
