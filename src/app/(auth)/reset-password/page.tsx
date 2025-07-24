"use client";
import "@/app/(auth)/auth.styles.scss";
import { DefaultLink } from "@/common/components/ui/a/DefaultLink";
import { DefaultButton } from "@/common/components/ui/button/DefaultButton";
import { DefaultInput } from "@/common/components/ui/input/DefaultInput";
import useInput from "@/common/hooks/useInput";
import { validators } from "@/common/utils/validators";

export default function ResetPassword() {
  const email = useInput("", validators.email);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailError = email.handleCheck();

    if (!emailError) {
    }
  };

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

        <DefaultButton
          title="Отправить код"
          type="submit"
          disabled={!!email.error}
        />

        {email.error && <span className="auth__error">{email.error}</span>}
      </form>

      <DefaultLink title="Вернуться назад" linkTo="/login" />
    </section>
  );
}
