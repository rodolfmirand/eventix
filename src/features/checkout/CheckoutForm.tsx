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
  onSubmit: () => void;
};

const initialValues: CheckoutFormValues = {
  cardName: "",
  cardNumber: "",
  cvv: "",
  expiry: "",
};

export function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const [values, setValues] = useState<CheckoutFormValues>(initialValues);
  const [errors, setErrors] = useState<CheckoutFormErrors>({});
  const [formError, setFormError] = useState("");

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");

    if (!validate()) {
      setFormError("Revise os campos destacados antes de finalizar.");
      return;
    }

    onSubmit();
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
        value={values.cardName}
      />
      <Input
        error={errors.cardNumber}
        label="Numero do cartao"
        name="cardNumber"
        onChange={(event) => updateValue("cardNumber", event.target.value)}
        placeholder="0000 0000 0000 0000"
        value={values.cardNumber}
      />
      <div className="form-grid">
        <Input
          error={errors.expiry}
          label="Validade"
          name="expiry"
          onChange={(event) => updateValue("expiry", event.target.value)}
          placeholder="MM/AA"
          value={values.expiry}
        />
        <Input
          error={errors.cvv}
          label="CVV"
          name="cvv"
          onChange={(event) => updateValue("cvv", event.target.value)}
          placeholder="123"
          value={values.cvv}
        />
      </div>
      <Button type="submit">Finalizar compra</Button>
    </form>
  );
}
