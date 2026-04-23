import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { PageHeader } from "../components/ui/PageHeader";

export function LoginPage() {
  return (
    <section className="page-stack page-stack--narrow">
      <PageHeader
        eyebrow="Acesso"
        title="Entrar na plataforma"
        subtitle="O login sera simulado para cumprir o fluxo de compra e perfil do usuario."
      />

      <Card>
        <form className="form-stack">
          <Input label="Email" name="email" placeholder="voce@email.com" type="email" />
          <Input label="Senha" name="password" placeholder="Digite sua senha" type="password" />
          <Button type="submit">Entrar</Button>
        </form>
      </Card>
    </section>
  );
}
