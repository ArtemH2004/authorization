"use client";
import "@/app/(auth)/auth.styles.scss";
import { DefaultLink } from "@/common/components/ui/a/DefaultLink";
import { DefaultButton } from "@/common/components/ui/button/DefaultButton";
import { DefaultInput } from "@/common/components/ui/input/DefaultInput";
import useInput from "@/common/hooks/useInput";
import { validators } from "@/common/utils/validators";
import { routes } from "@/config/routes.config";
import { useState, useEffect } from "react";

export const ResetPassword = () => {
  const email = useInput("", validators.email);
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const errors = wasSubmitted && email.error;

  const handleReset = () => {
    email.reset();
    setWasSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWasSubmitted(true);

    const emailError = email.handleCheck();

    if (!emailError) {
      return;
    }

    handleReset();
  };

  useEffect(() => {
    !errors ? setWasSubmitted(false) : setWasSubmitted(true);
  }, [errors]);

  return (
    <section className="auth__section">
      <h1>Забыли пароль?</h1>

      <form className="auth__form" onSubmit={handleSubmit}>
        <p className="auth__description">
          Для восстановления пароля на ваш Email будет отправлен код
        </p>

        <DefaultInput
          id="email"
          label="Email"
          type="email"
          placeholder="artem@gmail.com"
          value={email.value}
          onChange={email.onChange}
          error={!!email.error}
          required
        />

        <div />

        <DefaultButton
          title="Отправить код"
          type="submit"
          disabled={wasSubmitted}
        />

        {wasSubmitted && errors && (
          <span className="auth__error">{errors}</span>
        )}
      </form>

      <DefaultLink title="Вернуться назад" linkTo={routes.login} />
    </section>
  );
}
