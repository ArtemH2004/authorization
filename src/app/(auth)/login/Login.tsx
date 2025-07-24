"use client";
import "@/app/(auth)/auth.styles.scss";
import { DefaultLink } from "@/common/components/ui/a/DefaultLink";
import { DefaultButton } from "@/common/components/ui/button/DefaultButton";
import { DefaultInput } from "@/common/components/ui/input/DefaultInput";
import useInput from "@/common/hooks/useInput";
import { validators } from "@/common/utils/validators";
import { routes } from "@/config/routes.config";
import { useEffect, useState } from "react";
export const Login = () => {
  const email = useInput("", validators.email);
  const password = useInput("", validators.password);
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const errors =
    (wasSubmitted && email.error) || (wasSubmitted && password.error);

  const handleReset = () => {
    email.reset();
    password.reset();
    setWasSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWasSubmitted(true);

    const emailError = email.handleCheck();
    const passwordError = password.handleCheck();

    if (!emailError && !passwordError) {
      return;
    }

    handleReset();
  };

  useEffect(() => {
    !errors ? setWasSubmitted(false) : setWasSubmitted(true);
  }, [errors]);

  return (
    <section className="auth__section">
      <h1>Вход</h1>

      <form className="auth__form" onSubmit={handleSubmit}>
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

        <DefaultInput
          id="password"
          label="Пароль"
          type="password"
          placeholder="••••••"
          value={password.value}
          onChange={password.onChange}
          error={!!password.error}
          required
        />

        <DefaultLink title="Забыли пароль?" linkTo={routes.resetPassword} />

        <DefaultButton title="Войти" type="submit" disabled={wasSubmitted} />

        {wasSubmitted && errors && (
          <span className="auth__error">{errors}</span>
        )}
      </form>

      <span className="auth__span">
        Нет аккаунта? <DefaultLink title="Регистрация" linkTo={routes.register} />
      </span>
    </section>
  );
};
