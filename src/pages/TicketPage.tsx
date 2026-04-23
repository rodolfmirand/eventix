import { useParams } from "react-router-dom";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { previewPurchase } from "../data/previewCatalog";

export function TicketPage() {
  const { ticketId = "ingresso" } = useParams();

  return (
    <section className="page-stack page-stack--narrow">
      <PageHeader
        eyebrow="Ingresso digital"
        title="Seu ingresso"
        subtitle="Esta tela exibira o QR Code e os detalhes do ingresso comprado."
      />

      <Card className="digital-ticket">
        <Badge variant="primary">#{ticketId}</Badge>
        <div className="qr-placeholder" aria-label="Espaco reservado para QR Code">
          QR
        </div>
        <div>
          <h2>{previewPurchase.event}</h2>
          <p>Apresente este QR Code na entrada do evento.</p>
        </div>
        <dl className="ticket-details">
          <div>
            <dt>Data</dt>
            <dd>{previewPurchase.date}</dd>
          </div>
          <div>
            <dt>Local</dt>
            <dd>{previewPurchase.location}</dd>
          </div>
          <div>
            <dt>Categoria</dt>
            <dd>{previewPurchase.category}</dd>
          </div>
          <div>
            <dt>Assento</dt>
            <dd>{previewPurchase.seat}</dd>
          </div>
        </dl>
      </Card>
    </section>
  );
}
