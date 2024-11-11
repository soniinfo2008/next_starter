"use client";

import { FC } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";

import { useRegister } from "./api/query";
import { Input } from "./input/input";
import { RegisterFormSchema, RegisterFormType } from "./schema";

export const RegisterForm: FC = () => {
  const methods = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const register = useRegister();

  const onSubmit: SubmitHandler<RegisterFormType> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    confirmPassword,
    ...rest
  }) => {
    console.log(rest);
    register.mutate(rest);
  };

  return (
    <FormProvider {...methods}>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label="Full Name"
          placeholder="Full Name"
          name="username"
          errors={errors}
        />
        <Input
          type="email"
          label="Email"
          name="email"
          placeholder="Email"
          errors={errors}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          placeholder="Password"
          errors={errors}
        />
        <Input
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Confirm Password"
          errors={errors}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </FormProvider>
  );
};
