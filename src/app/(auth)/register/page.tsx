"use client";
import "@/app/(auth)/auth.styles.scss";
import { DefaultLink } from "@/common/components/ui/a/DefaultLink";
import { DefaultButton } from "@/common/components/ui/button/DefaultButton";
import { CheckboxInput } from "@/common/components/ui/input/CheckboxInput";
import { DefaultInput } from "@/common/components/ui/input/DefaultInput";
import useInput from "@/common/hooks/useInput";
import { InputCharLimitsEnum, validators } from "@/common/utils/validators";
import { useEffect, useState } from "react";

export default function Register() {
  const name = useInput("", validators.user_name);
  const email = useInput("", validators.email);
  const password = useInput("", validators.password);
  const rPassword = useInput("", validators.password);
  const [concError, setConcError] = useState("");
  const [isPolicy, setIsPolicy] = useState(false);
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const errors =
    (wasSubmitted && name.error) ||
    (wasSubmitted && email.error) ||
    (wasSubmitted && password.error) ||
    (wasSubmitted && rPassword.error) ||
    (wasSubmitted && concError);

  const handleReset = () => {
    name.reset();
    email.reset();
    password.reset();
    rPassword.reset();
    setConcError("");
    setIsPolicy(false);
    setWasSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWasSubmitted(true);

    const nameError = name.handleCheck();
    const emailError = email.handleCheck();
    const passwordError = password.handleCheck();
    const rPasswordError = rPassword.handleCheck();

    if (!nameError && !emailError && !passwordError && !rPasswordError) {
      return;
    }

    handleReset();
  };

  useEffect(() => {
    if (wasSubmitted)
      if (password.value === rPassword.value) setConcError("");
      else setConcError("Пароли не совпадают");

    !errors ? setWasSubmitted(false) : setWasSubmitted(true);
  }, [rPassword, errors]);

  return (
    <section className="auth__section">
      <h1>Регистрация</h1>

      <form className="auth__form" onSubmit={handleSubmit}>
        <DefaultInput
          id="user_name"
          label="Имя пользователя"
          placeholder="artem"
          value={name.value}
          onChange={name.onChange}
          error={!!name.error}
          maxLength={InputCharLimitsEnum.USER_NAME}
          required
        />

        <DefaultInput
          id="email"
          label="Email"
          type="email"
          placeholder="artem@gmail.com"
          value={email.value}
          onChange={email.onChange}
          error={!!email.error}
          maxLength={InputCharLimitsEnum.EMAIL}
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
          maxLength={InputCharLimitsEnum.PASSWORD}
          required
        />

        <DefaultInput
          id="rPassword"
          label="Повторите пароль"
          type="password"
          placeholder="••••••"
          value={rPassword.value}
          onChange={rPassword.onChange}
          error={!!rPassword.error}
          maxLength={InputCharLimitsEnum.PASSWORD}
          required
        />

        <CheckboxInput
          id="privacy-policy"
          title="Политика Конфиденциальности"
          linkTo="/privacy-policy"
          isActive={isPolicy}
          setActive={setIsPolicy}
        />

        <DefaultButton
          title="Регистрация"
          type="submit"
          disabled={wasSubmitted && !isPolicy}
        />

        {wasSubmitted && errors && (
          <span className="auth__error">{errors}</span>
        )}
      </form>

      <span className="auth__span">
        Уже есть аккаунт? <DefaultLink title="Войти" linkTo="/login" />
      </span>
    </section>
  );
}
