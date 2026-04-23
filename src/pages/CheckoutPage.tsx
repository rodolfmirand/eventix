import { Alert } from "../components/ui/Alert";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";

export function CheckoutPage() {
  return (
    <section className="page-stack">
      <PageHeader
        eyebrow="Pagamento"
        title="Resumo da compra"
        subtitle="Nesta etapa entra o formulario de pagamento simulado e a revisao final do ingresso."
      />
      <Card>
        <Alert title="Proximo bloco" variant="info">
          O checkout sera implementado depois que categoria e assento estiverem definidos.
        </Alert>
      </Card>
    </section>
  );
}
