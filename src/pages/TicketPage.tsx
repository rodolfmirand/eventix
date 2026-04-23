import { useParams } from "react-router-dom";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";

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
        <p>O QR Code sera gerado a partir dos dados do ingresso.</p>
      </Card>
    </section>
  );
}
