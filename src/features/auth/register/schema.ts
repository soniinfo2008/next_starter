import { z } from "zod";

import { Role } from "@/services/role-enum";

export const BaseRegisterFormSchema = z.object({
  username: z.string().trim().min(1, { message: "Full Name is required" }),
  email: z
    .string()
    .min(1, "Email is required")
    .trim()
    .email({ message: "Invalid Email" })
    .toLowerCase(),
  password: z.string().trim().min(1, { message: "Password is required" }),
});

export const RegisterFormSchema = BaseRegisterFormSchema.extend({
  confirmPassword: z
    .string()
    .trim()
    .min(1, { message: "Confirm password is required" }),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
  path: ["confirmPassword"],
  message: "Password don't match",
});

export type RegisterFormType = z.infer<typeof RegisterFormSchema>;

export type RegisterFieldName = keyof RegisterFormType;

export const RegisterAPIResponseSchema = z.object({
  statusCode: z.number(),
  data: z.object({
    user: z.object({
      _id: z.string(),
      avatar: z.object({
        url: z.string(),
        localPath: z.string(),
        _id: z.string(),
      }),
      username: z.string(),
      email: z.string().email(),
      role: z.nativeEnum(Role),
      loginType: z.enum(["EMAIL_PASSWORD", "GOOGLE", "FACEBOOK", "GITHUB"]),
      isEmailVerified: z.boolean(),
      createdAt: z.string(),
      updatedAt: z.string(),
      __v: z.number(),
    }),
  }),
  message: z.string(),
  success: z.boolean(),
});
