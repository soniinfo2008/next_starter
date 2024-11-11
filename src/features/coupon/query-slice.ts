import { z } from "zod";

import { api } from "@/services/api";
import { API_ENDPOINT } from "@/services/endpoints-constant";

enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

const SingleCouponAPISchema = z.object({
  id: z.string(),
  name: z.string(),
  imageUrl: z.string(),
  phoneNumber: z.union([z.string(), z.null()]),
  email: z.string().email(),
  role: z.nativeEnum(Role),
});

const CouponAPISchema = z.object({
  status: z.boolean(),
  message: z.string(),
  payload: z.object({
    users: z.array(SingleCouponAPISchema),
  }),
});

const GetAllUserRequest = z.void();

const GetAllUserResponse = CouponAPISchema;

const getAllCoupons = api<
  z.infer<typeof GetAllUserRequest>,
  z.infer<typeof GetAllUserResponse>
>({
  path: API_ENDPOINT.COUPONS_LIST,
  method: "GET",
  requestSchema: GetAllUserRequest,
  responseSchema: GetAllUserResponse,
});

export const CouponAPI = {
  getAllCoupons,
};
