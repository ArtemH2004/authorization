"use client";
import "@/app/(auth)/auth.styles.scss";
import { DefaultLink } from "@/common/components/ui/a/DefaultLink";
import { DefaultButton } from "@/common/components/ui/button/DefaultButton";
import { DefaultInput } from "@/common/components/ui/input/DefaultInput";
import useInput from "@/common/hooks/useInput";
import { validators } from "@/common/utils/validators";
import { useEffect, useState } from "react";

export const ConfirmCode = () => {
  const code = useInput("", validators.code);
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const errors = wasSubmitted && code.error;

  const handleReset = () => {
    code.reset();
    setWasSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWasSubmitted(true);

    if (!code.handleCheck()) {
      return;
    }

    handleReset();
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 6) value = value.slice(0, 6);

    if (value.length > 3) {
      value = `${value.slice(0, 3)}-${value.slice(3)}`;
    }

    code.handleChange(value);
  };

  useEffect(() => {
    !errors ? setWasSubmitted(false) : setWasSubmitted(true);
  }, [errors]);

  return (
    <section className="auth__section">
      <h1>Код подтверждения</h1>

      <form className="auth__form" onSubmit={handleSubmit}>
        <p className="auth__description">
          Введите код, отправленный на ваш Email, для восстановления пароля
        </p>

        <DefaultInput
          id="code"
          label="Код"
          inputMode="numeric"
          pattern="\d{3}-\d{3}"
          placeholder="xxx-xxx"
          value={code.value}
          onChange={handleCodeChange}
          error={!!code.error}
          required
        />

        <span className="auth__span">
          {"Время на подтверждение: "}
          <time dateTime="">{` ${"0:59"}`}</time>
        </span>

        <DefaultButton
          title="Подтвердить"
          type="submit"
          disabled={wasSubmitted}
        />

        {wasSubmitted && errors && (
          <span className="auth__error">{errors}</span>
        )}
      </form>

      <DefaultLink title="Вернуться назад" linkTo="/login" />
    </section>
  );
}
