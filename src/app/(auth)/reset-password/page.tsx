import { Metadata } from "next";
import { ResetPassword } from "@/app/(auth)/reset-password/ResetPassword";

export const metadata: Metadata = {
  title: "Восстановление пароля"
};

export default function ResetPasswordPage() {
  return <ResetPassword />
}
