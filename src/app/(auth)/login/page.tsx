import "@/app/(auth)/auth.styles.scss";
import { DefaultLink } from "@/common/components/a/DefaultLink";
import { DefaultInput } from "@/common/components/input/DefaultInput";

export default function Login() {
  return (
    <section className="auth__section">
      <h1>Логин</h1>

      <form className="auth__form">
        <DefaultInput id="email" label="Email" placeholder="artem@gmail.com" required />
      </form>

      <span className="auth__span">
        {`Нет аккаунта? `}
        {` `}
        <DefaultLink title="Регистрация" linkTo="/register" />
      </span>
    </section>
  );
}
