import "@/common/components/ui/a/a.styles.scss";
import Link from "next/link";

interface DefaultLinkProps { 
    title: string;
    linkTo: string;
}

export const DefaultLink = ({title, linkTo}: DefaultLinkProps) => {
  return (
    <Link href={linkTo} className="default-link">{title}</Link>
  )
}
