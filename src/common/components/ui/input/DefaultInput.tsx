import "@/common/components/ui/input/input.styles.scss";
import { useEffect, useRef, useState } from "react";
import { CircleProgressBar } from "@/common/components/ui/progress/CircleProgressBar";

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
  maxLength?: number;
}

export const DefaultInput = ({
  type,
  id,
  label,
  value = "",
  placeholder,
  onChange,
  onKeyDown,
  disabled,
  autoFocus,
  error,
  autoComplete,
  maxLength,
}: DefaultInputProps) => {
  const [progress, setProgress] = useState(0);
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (maxLength) {
      setProgress((value.length / maxLength) * 100);
    }
  }, [value, maxLength]);

  return (
    <div className="default-input__wrapper">
      <label htmlFor={id} className="default-input__label">
        {label}
      </label>
      <div className="default-input__container" ref={inputRef}>
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
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          maxLength={maxLength}
        />
        {maxLength && (
          <div className="default-input__progress-container">
            <CircleProgressBar
              progress={progress}
              value={value.length}
              maxValue={maxLength}
            />
          </div>
        )}
      </div>
    </div>
  );
};