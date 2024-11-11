import { z } from "zod";

import { api } from "../api";
import { API_ENDPOINT } from "../endpoints-constant";
import {
  RefreshTokenAPIRequestSchema,
  RefreshTokenAPIResponseSchema,
} from "./schema";

const RefreshTokenRequest = RefreshTokenAPIRequestSchema;

const RefreshTokenResponse = RefreshTokenAPIResponseSchema;

export const getRefreshToken = api<
  z.infer<typeof RefreshTokenRequest>,
  z.infer<typeof RefreshTokenResponse>
>({
  method: "GET",
  path: API_ENDPOINT.REFRESH_TOKEN,
  requestSchema: RefreshTokenRequest,
  responseSchema: RefreshTokenResponse,
  type: "public",
});
