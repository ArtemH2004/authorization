import "@/common/components/ui/a/a.styles.scss";
import Link from "next/link";

interface DefaultLinkProps {
  title: string;
  linkTo: string;
  newPage?: boolean;
}

export const DefaultLink = ({ title, linkTo, newPage }: DefaultLinkProps) => {
  return (
    <Link
      href={linkTo}
      target={newPage ? "_blank" : undefined}
      className="default-link"
    >
      {title}
    </Link>
  );
};
