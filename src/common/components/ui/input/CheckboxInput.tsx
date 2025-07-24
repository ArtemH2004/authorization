import "@/common/components/ui/input/input.styles.scss";
import { DefaultLink } from "@/common/components/ui/a/DefaultLink";

interface CheckboxInputProps {
  isActive: boolean;
  setActive: (isActive: boolean) => void;
  id: string;
  title: string;
  linkTo?: string;
  error?: boolean;
}
export const CheckboxInput = ({
  isActive = false,
  setActive,
  id,
  title,
  linkTo,
  error,
}: CheckboxInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActive(e.target.checked);
  };

  return (
    <div className="checkbox-input__wrapper">
      <label className="checkbox-input__label" htmlFor={id}>
        <input
          className="checkbox-input--custom"
          id={id}
          type="checkbox"
          checked={isActive}
          onChange={handleChange}
        />
        <span
          className={`checkbox-input__checkmark ${
            error && "checkbox-input__checkmark--error"
          }`}
        ></span>
      </label>
      {!!linkTo && <DefaultLink title={title} linkTo={linkTo} newPage />}
    </div>
  );
};
