import { z } from "zod";

import { api } from "@/services/api";
import { API_ENDPOINT } from "@/services/endpoints-constant";

import { BaseRegisterFormSchema, RegisterAPIResponseSchema } from "../schema";

const RegisterRequest = BaseRegisterFormSchema;

const RegisterResponse = RegisterAPIResponseSchema;

const register = api<
  z.infer<typeof RegisterRequest>,
  z.infer<typeof RegisterResponse>
>({
  method: "POST",
  path: API_ENDPOINT.REGISTER,
  requestSchema: RegisterRequest,
  responseSchema: RegisterResponse,
  type: "public",
});

export const RegisterAPI = {
  register,
};
