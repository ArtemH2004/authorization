import { useState, useCallback } from "react";
import { ValidateFuncType } from "@/common/utils/validators";

const useInput = (initialValue: string, validator: ValidateFuncType) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState('');

    const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        const validationError = validator(newValue);
        setError(validationError);
    }, [validator]);

    const handleChange = useCallback((value: string) => {
        setValue(value);
    }, []);

    const reset = useCallback(() => {
        setValue(initialValue);
        setError('');
    }, [initialValue]);

    const handleCheck = useCallback(() => {
        const validationError = validator(value);
        setError(validationError);
        return validationError;
    }, [validator, value]);

    return {
        value,
        onChange,
        error,
        setError,
        handleCheck,
        handleChange,
        reset,
    };
};

export default useInput;