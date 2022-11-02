import styled from "styled-components/native";
import React from "react";
import { Control, FieldError, FieldValues, Path, UseFormRegister, Controller } from "react-hook-form";



interface CustomInputProps<T extends FieldValues> {
  type?: string;
  required?: boolean;
  placeholder: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  errors: FieldError | undefined;
  minLength?: number;
  maxLength?: number;
  isDisabled?: boolean;
  control: Control<T>;
  styles: {
    [e: string]: number | string
  }
}

interface Option {
  value: number;
  message: string;
}
interface RegisterOptions {
  required: string | boolean;
  minLength: 0 | Option | undefined;
  maxLength: 0 | Option | undefined;
}

export const CustomInput = <T extends FieldValues>({styles, isDisabled, minLength, maxLength, type = "text", placeholder, register, name, errors, required = false, control}: CustomInputProps<T>) => {

  const registerOptions: RegisterOptions = {
    required: required && "Required",
    minLength: minLength && {
      value: minLength,
      message: `Minimum ${minLength} character`
    },
    maxLength: maxLength && {
      value: maxLength,
      message: `Maximum ${maxLength} character`
    },
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, value, onBlur}}) => (
        <Input
          placeholder={placeholder}
          type={type}
          $errors={errors}
          disabled={isDisabled}
          value={value}
          onBlur={onBlur}
          onChangeText={(e: string) => onChange(e)}
          style={styles}
        />
      )}
      rules={registerOptions}
    />
  );
};

const Input = styled.TextInput<{$errors?: FieldError}>`
  border-radius: 10px;
  border-style: solid;
  border-color: ${({ $errors }) => $errors ? "#AC5253" : "#E5E5E5"};
  border-width: 1px;
  padding: 15px;
  font-size: 17px;
`
