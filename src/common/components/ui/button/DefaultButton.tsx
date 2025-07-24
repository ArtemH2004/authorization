import "@/common/components/ui/button/button.styles.scss";

interface DefaultButtonProps {
  type?: "button" | "reset" | "submit";
  title: string;
  disabled?: boolean;
  onClick?: (e?: any) => void;
}
export const DefaultButton = ({
  type,
  title,
  disabled,
  onClick,
}: DefaultButtonProps) => {
  return (
    <button
      className={`default-button__button ${
        disabled && "default-button__button--disabled"
      }`}
      type={type ?? "button"}
      onClick={onClick}
    >
      <span className="default-button__span"> {title}</span>
    </button>
  );
};
