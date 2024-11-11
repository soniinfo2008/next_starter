"use client";

import React, { FC } from "react";

import { FieldErrors, useFormContext } from "react-hook-form";

import {
  RegisterFieldName,
  RegisterFormType,
} from "@/features/auth/register/schema";
import { cn } from "@/lib/utils";

import { InputErrorMessage } from "./input-error-message";

export interface InputErrorProps {
  name: RegisterFieldName;
  errors: FieldErrors<RegisterFormType>;
}

export interface InputProps
  extends InputErrorProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "name"> {
  label: string;
}

export const Input: FC<InputProps> = ({
  className,
  name,
  label,
  errors,
  ...props
}) => {
  const { register } = useFormContext();

  const hasError = Object.prototype.hasOwnProperty.call(errors, name);

  return (
    <div>
      <div>
        <label htmlFor={name} className="form__label">
          {label}
        </label>
        <input
          {...register(name)}
          {...props}
          className={cn(
            `form__input ${hasError && "border-red-500"}`,
            className
          )}
        />
      </div>
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
};
