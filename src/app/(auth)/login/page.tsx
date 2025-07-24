import { Metadata } from "next";
import { Login } from "@/app/(auth)/login/Login";

export const metadata: Metadata = {
  title: "Вход"
};

export default function LoginPage() {
  return <Login />
}
