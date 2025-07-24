import { Metadata } from "next";
import { ConfirmCode } from "@/app/(auth)/confirm-code/ConfirmCode";

export const metadata: Metadata = {
  title: "Код подтверждения"
};


export default function ConfirmCodePage() {
  return <ConfirmCode />
}
