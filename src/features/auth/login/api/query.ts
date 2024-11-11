import { useRouter } from "next/navigation";

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { z } from "zod";

import { useUserStore } from "@/store/user-store";

import { LogInAPIResponseSchema, LogInFormType } from "../schema";
import { LogInAPI } from "./query-slice";

interface ErrorResponse {
  message: string;
}

export function useLogIn() {
  const router = useRouter();
  const { setCredentials } = useUserStore();
  return useMutation<
    z.infer<typeof LogInAPIResponseSchema>,
    AxiosError<ErrorResponse>,
    LogInFormType
  >({
    mutationFn: (user) => LogInAPI.logIn(user),
    onSuccess: (ResData) => {
      const { data, message } = ResData;

      setCredentials({
        accessToken: data.accessToken,
      });
      router.push("/application");
      toast.success(message);
    },
    onError: (error) => {
      const errorMessage = error.response?.data.message;

      toast.error(errorMessage);
    },
  });
}
