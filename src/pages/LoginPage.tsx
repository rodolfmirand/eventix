import { useState, type FormEvent } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { PageHeader } from "../components/ui/PageHeader";
import { useAuth } from "../features/auth/AuthContext";

type LoginFormErrors = {
  email?: string;
  password?: string;
};

type LocationState = {
  from?: {
    pathname?: string;
  };
};

export function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const from = (location.state as LocationState | null)?.from?.pathname ?? "/eventos";

  if (isAuthenticated) {
    return <Navigate replace to={from} />;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");

    const nextErrors: LoginFormErrors = {};

    if (!email.trim()) {
      nextErrors.email = "Informe o email para entrar.";
    }

    if (!password) {
      nextErrors.password = "Informe a senha para entrar.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Nao foi possivel entrar.");
    }
  }

  return (
    <section className="page-stack page-stack--narrow">
      <PageHeader
        eyebrow="Acesso"
        title="Entrar na sua conta"
        subtitle="Acesse seus ingressos, acompanhe compras e conclua pedidos com mais rapidez."
      />

      <Card>
        <form className="form-stack" onSubmit={handleSubmit}>
          {formError ? <p className="field__message field__message--error">{formError}</p> : null}
          <Input
            error={errors.email}
            label="Email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="voce@email.com"
            type="email"
            value={email}
          />
          <Input
            error={errors.password}
            label="Senha"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Digite sua senha"
            type="password"
            value={password}
          />
          <Button isLoading={isLoading} type="submit">
            Entrar
          </Button>
        </form>
      </Card>
    </section>
  );
}
