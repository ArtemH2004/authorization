import "@/common/components/input/input.styles.scss";

interface DefaultInputProps {

}

export const DefaultInput = ({}: DefaultInputProps) => {
  return (
    <div className="default-input__wrapper">
        <label htmlFor="" className="default-input__label"></label>
      <input className="default-input__input" />
    </div>
  );
};
