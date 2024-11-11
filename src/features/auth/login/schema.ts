import { z } from "zod";

export const LogInFormSchema = z.object({
  username: z.string().trim().min(1, { message: "Required" }),
  password: z.string().trim().min(1, { message: "Required" }),
});

export type LogInFormType = z.infer<typeof LogInFormSchema>;

export type LogInFieldName = keyof LogInFormType;

export const LogInAPIResponseSchema = z.object({
  statusCode: z.number(),
  message: z.string(),
  success: z.boolean(),
  data: z.object({
    user: z.object({
      _id: z.string(),
      avatar: z.object({
        url: z.string(),
        localPath: z.string(),
        _id: z.string(),
      }),
      username: z.string(),
      email: z.string(),
      role: z.enum(["ADMIN", "USER", "GUEST"]),
      loginType: z.enum(["EMAIL_PASSWORD", "GOOGLE", "FACEBOOK", "GITHUB"]),
      isEmailVerified: z.boolean(),
      createdAt: z.string(),
      updatedAt: z.string(),
      __v: z.number(),
    }),
    accessToken: z.string(),
    refreshToken: z.string(),
  }),
});
