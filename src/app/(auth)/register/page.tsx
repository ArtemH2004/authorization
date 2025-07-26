import { Metadata } from "next";
import { Register } from "@/app/(auth)/register/Register";


export const metadata: Metadata = {
  title: "Регистрация"
};

export default function RegisterPage() {
  return <Register />
}
