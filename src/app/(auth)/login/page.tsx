"use client";
import "@/app/(auth)/auth.styles.scss";
import { DefaultLink } from "@/common/components/ui/a/DefaultLink";
import { DefaultButton } from "@/common/components/ui/button/DefaultButton";
import { DefaultInput } from "@/common/components/ui/input/DefaultInput";
import useInput from "@/common/hooks/useInput";
import { validators } from "@/common/utils/validators";

export default function Login() {
  const email = useInput("", validators.email);
  const password = useInput("", validators.password);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailError = email.handleCheck();
    const passwordError = password.handleCheck();

    if (!emailError && !passwordError) {
    }
  };

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

        <DefaultLink title="Забыли пароль?" linkTo="/reset" />

        <DefaultButton
          title="Войти"
          type="submit"
          disabled={!!email.error || !!password.error}
        />

        {password.error && (
          <span className="auth__error">{email.error || password.error}</span>
        )}
      </form>

      <span className="auth__span">
        Нет аккаунта? <DefaultLink title="Регистрация" linkTo="/register" />
      </span>
    </section>
  );
}
