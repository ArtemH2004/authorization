import "@/common/components/ui/input/input.styles.scss";

interface DefaultInputProps {
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  id: string;
  label: string;
  value?: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  error?: boolean;
  autoComplete?: string;
}

export const DefaultInput = ({
  type,
  id,
  label,
  value,
  placeholder,
  onChange,
  onKeyDown,
  disabled,
  autoFocus,
  error,
  autoComplete,
}: DefaultInputProps) => {
  return (
    <div className="default-input__wrapper">
      <label htmlFor={id} className="default-input__label">
        {label}
      </label>
      <input
        className={`default-input__input ${
          disabled
            ? "default-input__input--disabled"
            : error
            ? "default-input__input--error"
            : ""
        }`}
        id={id}
        type={type ?? "text"}
        name={label}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled ?? false}
        // $isDisabled={disabled ?? false}
        // $isError={error ?? false}
        autoFocus={autoFocus}
        // ref={ref}
        autoComplete={autoComplete}
      />
    </div>
  );
};

// import { forwardRef } from "react";

// const Input = styled("input")<{
//   $isDisabled?: boolean;
//   $isError?: boolean;
//   $height: number;
// }>`
//   width: 100%;
//   height: ${({ $height }) => `${$height}px`};
//   padding: 5px 10px;
//   color: ${(props) =>
//     props.$isDisabled ? colors.grayDark : colors.blackTotal};
//   font-size: ${fonts.sizes.small};
//   font-weight: ${fonts.weights.regular};
//   line-height: 1.2;
//   border: ${(props) =>
//     props.$isError ? borders.styles.error : borders.styles.graySmall};
//   border-radius: ${borders.radius.default};
//   pointer-events: ${(props) => props.$isDisabled && "none"};
//   ${borderHover}

//   &::placeholder {
//     color: ${colors.grayDark};
//   }
// `;

// export const ModalInput = forwardRef<HTMLInputElement, ModalInputProps>(
//   (
//     {
//       type,
//       id,
//       name,
//       value,
//       placeholder,
//       onChange,
//       onKeyDown,
//       disabled,
//       autoFocus,
//       error,
//       height = 30,
//       autoComplete,
//     },
//     ref
//   ) => {
//     return (
//       <Wrapper>
//         <VisuallyHidden>
//           <label htmlFor={id}>{name}</label>
//         </VisuallyHidden>
//         <Input
//           id={id}
//           type={type ?? "text"}
//           name={name}
//           value={value}
//           placeholder={placeholder}
//           onChange={onChange}
//           onKeyDown={onKeyDown}
//           disabled={disabled ?? false}
//           $isDisabled={disabled ?? false}
//           $isError={error ?? false}
//           $height={height}
//           autoFocus={autoFocus}
//           ref={ref}
//           autoComplete={autoComplete}
//         />
//       </Wrapper>
//     );
//   }
// );
