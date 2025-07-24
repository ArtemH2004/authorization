import "@/app/(auth)/auth.styles.scss";
import { DefaultLink } from "@/common/components/ui/a/DefaultLink";
import { DefaultButton } from "@/common/components/ui/button/DefaultButton";
import { DefaultInput } from "@/common/components/ui/input/DefaultInput";

export default function Login() {
  return (
    <section className="auth__section">
      <h1>Логин</h1>

      <form className="auth__form">
        <DefaultInput
          id="email"
          label="Email"
          placeholder="artem@gmail.com"
          required
        />
        <DefaultInput
          id="password"
          label="Пароль"
          placeholder="••••••"
          required
        />
        <DefaultLink title="Забыли пароль?" linkTo="/reset" />

        <DefaultButton title="Войти" type="submit" />
      </form>

      <span className="auth__span">
        {`Нет аккаунта? `}
        {` `}
        <DefaultLink title="Регистрация" linkTo="/register" />
      </span>
    </section>
  );
}
