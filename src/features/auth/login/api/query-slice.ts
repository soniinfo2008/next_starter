import { z } from "zod";

import { api } from "@/services/api";
import { API_ENDPOINT } from "@/services/endpoints-constant";

import { LogInAPIResponseSchema, LogInFormSchema } from "../schema";

const LogInRequest = LogInFormSchema;

const LogInResponse = LogInAPIResponseSchema;

const logIn = api<z.infer<typeof LogInRequest>, z.infer<typeof LogInResponse>>({
  method: "POST",
  path: API_ENDPOINT.LOG_IN,
  requestSchema: LogInRequest,
  responseSchema: LogInResponse,
  type: "public",
});

export const LogInAPI = {
  logIn,
};
