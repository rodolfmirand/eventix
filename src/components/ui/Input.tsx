import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  helperText?: string;
  label: string;
};

export function Input({ error, helperText, id, label, ...props }: InputProps) {
  const inputId = id ?? props.name;
  const descriptionId = inputId ? `${inputId}-description` : undefined;

  return (
    <div className="field">
      <label className="field__label" htmlFor={inputId}>
        {label}
      </label>
      <input
        aria-describedby={error || helperText ? descriptionId : undefined}
        aria-invalid={error ? true : undefined}
        className="field__input"
        id={inputId}
        {...props}
      />
      {error ? (
        <p className="field__message field__message--error" id={descriptionId}>
          {error}
        </p>
      ) : helperText ? (
        <p className="field__message" id={descriptionId}>
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
