import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { EmptyState } from "../components/ui/EmptyState";
import { PageHeader } from "../components/ui/PageHeader";

export function ProfilePage() {
  return (
    <section className="page-stack">
      <PageHeader
        eyebrow="Perfil"
        title="Meus ingressos"
        subtitle="Aqui os ingressos serao separados entre proximos eventos e eventos passados."
      />

      <Card>
        <EmptyState title="Nenhum ingresso comprado ainda">
          Quando uma compra simulada for finalizada, os ingressos aparecerao aqui em ordem
          cronologica.
        </EmptyState>
      </Card>

      <Link to="/eventos">
        <Button variant="secondary">Ver eventos</Button>
      </Link>
    </section>
  );
}
