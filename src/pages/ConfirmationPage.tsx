import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";

export function ConfirmationPage() {
  return (
    <section className="page-stack">
      <PageHeader
        eyebrow="Confirmacao"
        title="Compra confirmada"
        subtitle="A tela final mostrara o status da compra e o caminho para o ingresso digital."
      />
      <Card className="action-panel">
        <p>Depois da compra simulada, o usuario podera abrir o ingresso ou voltar para o perfil.</p>
        <Link to="/perfil">
          <Button>Ir para o perfil</Button>
        </Link>
      </Card>
    </section>
  );
}
