import { useState, type FormEvent } from "react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

type CheckoutFormValues = {
  cardName: string;
  cardNumber: string;
  cvv: string;
  expiry: string;
};

type CheckoutFormErrors = Partial<Record<keyof CheckoutFormValues, string>>;

type CheckoutFormProps = {
  onSubmit: () => void | Promise<void>;
};

const initialValues: CheckoutFormValues = {
  cardName: "",
  cardNumber: "",
  cvv: "",
  expiry: "",
};

function formatCardNumber(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4);

  if (digits.length <= 2) {
    return digits;
  }

  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function formatCvv(value: string) {
  return value.replace(/\D/g, "").slice(0, 4);
}

export function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const [values, setValues] = useState<CheckoutFormValues>(initialValues);
  const [errors, setErrors] = useState<CheckoutFormErrors>({});
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateValue(field: keyof CheckoutFormValues, value: string) {
    setValues((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
    setFormError("");
  }

  function validate() {
    const nextErrors: CheckoutFormErrors = {};
    const digitsOnlyCard = values.cardNumber.replace(/\s+/g, "");

    if (!values.cardName.trim()) {
      nextErrors.cardName = "Informe o nome impresso no cartao.";
    }

    if (!/^\d{16}$/.test(digitsOnlyCard)) {
      nextErrors.cardNumber = "Informe um numero de cartao com 16 digitos.";
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(values.expiry)) {
      nextErrors.expiry = "Informe a validade no formato MM/AA.";
    }

    if (!/^\d{3,4}$/.test(values.cvv)) {
      nextErrors.cvv = "Informe um CVV com 3 ou 4 digitos.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");

    if (!validate()) {
      setFormError("Revise os campos destacados antes de finalizar.");
      return;
    }

    try {
      setIsSubmitting(true);
      await onSubmit();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="form-stack" onSubmit={handleSubmit}>
      {formError ? (
        <p className="field__message field__message--error">{formError}</p>
      ) : null}
      <Input
        error={errors.cardName}
        label="Nome impresso no cartao"
        name="cardName"
        onChange={(event) => updateValue("cardName", event.target.value)}
        placeholder="Maria Silva"
        autoComplete="cc-name"
        value={values.cardName}
      />
      <Input
        error={errors.cardNumber}
        label="Numero do cartao"
        name="cardNumber"
        maxLength={19}
        onChange={(event) => updateValue("cardNumber", formatCardNumber(event.target.value))}
        placeholder="0000 0000 0000 0000"
        autoComplete="cc-number"
        inputMode="numeric"
        value={values.cardNumber}
      />
      <div className="form-grid">
        <Input
          error={errors.expiry}
          label="Validade"
          name="expiry"
          maxLength={5}
          onChange={(event) => updateValue("expiry", formatExpiry(event.target.value))}
          placeholder="MM/AA"
          autoComplete="cc-exp"
          inputMode="numeric"
          value={values.expiry}
        />
        <Input
          error={errors.cvv}
          label="CVV"
          name="cvv"
          maxLength={4}
          onChange={(event) => updateValue("cvv", formatCvv(event.target.value))}
          placeholder="123"
          autoComplete="cc-csc"
          inputMode="numeric"
          value={values.cvv}
        />
      </div>
      <Button isLoading={isSubmitting} type="submit">
        Finalizar compra
      </Button>
    </form>
  );
}
