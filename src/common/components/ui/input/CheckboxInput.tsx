import "@/common/components/ui/input/input.styles.scss";
import { DefaultLink } from "@/common/components/ui/a/DefaultLink";

interface CheckboxInputProps {
  id: string;
  title: string;
  linkTo?: string;
}
export const CheckboxInput = ({ id, title, linkTo }: CheckboxInputProps) => {
  return (
    <div className="checkbox-input__wrapper">
      <label className="checkbox-input__label" htmlFor={id}>
        <input className="checkbox-input--custom" id={id} type="checkbox" />
        <span className="checkbox-input__checkmark"></span>
      </label>
      {!!linkTo && <DefaultLink title={title} linkTo={linkTo} />}
    </div>
  );
};
