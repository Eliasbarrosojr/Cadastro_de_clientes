import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { DivInputs, InputStyle } from "./style";

interface IInput {
  label: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
  type: "name" | "email" | "password" | "number";
  placeholder: string;
}

export const Inputs = ({
  label,
  type,
  placeholder,
  register,
  error,
}: IInput) => {
  return (
    <DivInputs>
      {label && <label htmlFor={register.name}>{label}</label>}
      <InputStyle
        type={type}
        id={register.name}
        placeholder={placeholder}
        {...register}
      />
      {error && <p>{error.message}</p>}
    </DivInputs>
  );
};
