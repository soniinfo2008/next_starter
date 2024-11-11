import { useRouter } from "next/navigation";

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { z } from "zod";

import {
  LogoutAPIRequestSchema,
  LogoutAPIResponseSchema,
} from "@/services/logout/schema";
import { useUserStore } from "@/store/user-store";

import { api } from "../api";
import { API_ENDPOINT } from "../endpoints-constant";

const LogoutRequest = LogoutAPIRequestSchema;

const LogoutResponse = LogoutAPIResponseSchema;

interface ErrorResponse {
  message: string;
}

const logout = api<
  z.infer<typeof LogoutRequest>,
  z.infer<typeof LogoutResponse>
>({
  method: "POST",
  path: API_ENDPOINT.SIGN_OUT,
  requestSchema: LogoutRequest,
  responseSchema: LogoutResponse,
});

export function useLogOut() {
  const router = useRouter();
  const { removeCredentials } = useUserStore();

  return useMutation<
    z.infer<typeof LogoutAPIResponseSchema>,
    AxiosError<ErrorResponse>
  >({
    mutationFn: logout,
    onSuccess: (data) => {
      const { message } = data;
      removeCredentials();
      router.push("/");
      toast.success(message);
    },
    onError: (error) => {
      const errorMessage = error.response?.data.message;
      toast.error(errorMessage);
    },
  });
}
