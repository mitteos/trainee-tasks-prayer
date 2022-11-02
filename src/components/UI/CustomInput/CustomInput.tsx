import styled from "styled-components/native";
import React from "react";
import {
  Control,
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
  Controller,
  UseFormHandleSubmit, SubmitHandler,
} from "react-hook-form";

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
  styles?: {
    [e: string]: number | string
  }
  onSubmitEditing: SubmitHandler<T>
  handleSubmit: UseFormHandleSubmit<T>
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

export const CustomInput = <T extends FieldValues>({handleSubmit, onSubmitEditing, styles, isDisabled, minLength, maxLength, type = "text", placeholder, register, name, errors, required = false, control}: CustomInputProps<T>) => {

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
          onSubmitEditing={handleSubmit(onSubmitEditing)}
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
