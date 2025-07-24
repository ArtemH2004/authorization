"use client";
import "@/app/(auth)/auth.styles.scss";
import { DefaultLink } from "@/common/components/ui/a/DefaultLink";
import { DefaultButton } from "@/common/components/ui/button/DefaultButton";
import { DefaultInput } from "@/common/components/ui/input/DefaultInput";
import useInput from "@/common/hooks/useInput";
import { InputCharLimitsEnum, validators } from "@/common/utils/validators";
import { useEffect, useState } from "react";

export default function UpdatePassword() {
  const password = useInput("", validators.password);
  const rPassword = useInput("", validators.password);
  const [concError, setConcError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const passwordError = password.handleCheck();
    const rPasswordError = rPassword.handleCheck();

    if (!passwordError && !rPasswordError) {
    }
  };

  useEffect(() => {
    if (password.value === rPassword.value) setConcError("");
    else setConcError("Пароли не совпадают");
  }, [rPassword]);

  return (
    <section className="auth__section">
      <h1>Обновление пароля</h1>

      <form className="auth__form" onSubmit={handleSubmit}>
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

        <DefaultButton
          title="Сохранить"
          type="submit"
          disabled={!!password.error || !rPassword.error}
        />

        {password.error && <span className="auth__error">{password.error}</span>}
      </form>

      <DefaultLink title="Вернуться назад" linkTo="/login" />
    </section>
  );
}
