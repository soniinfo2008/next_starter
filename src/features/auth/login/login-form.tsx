"use client";

import { FC } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";

import { useLogIn } from "./api/query";
import { Input } from "./input/input";
import { LogInFormSchema, LogInFormType } from "./schema";

export const LoginForm: FC = () => {
  const methods = useForm<LogInFormType>({
    resolver: zodResolver(LogInFormSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const signIn = useLogIn();

  const onSubmit: SubmitHandler<LogInFormType> = (data) => {
    console.log(data);
    signIn.mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label="Username"
          name="username"
          placeholder="Username"
          errors={errors}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          placeholder="Password"
          errors={errors}
        />

        <Button type="submit">Sign In</Button>
      </form>
    </FormProvider>
  );
};
