import { Metadata } from "next";
import { UpdatePassword } from "@/app/(auth)/update-password/UpdatePassword";

export const metadata: Metadata = {
  title: "Обновление пароля"
};

export default function UpdatePasswordPage() {
  return <UpdatePassword />
}
