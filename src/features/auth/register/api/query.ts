import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
// import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

// import { Routes } from "@/utils/routes-constants";
import { RegisterAPIResponseSchema, RegisterFormType } from "../schema";
import { RegisterAPI } from "./query-slice";

interface ErrorResponse {
  message: string;
}

export function useRegister() {
  //   const navigate = useNavigate();
  return useMutation<
    z.infer<typeof RegisterAPIResponseSchema>,
    AxiosError<ErrorResponse>,
    Omit<RegisterFormType, "confirmPassword">
  >({
    mutationFn: (user) => RegisterAPI.register(user),
    onSuccess: (data) => {
      toast.success(data.message);

      //   navigate(Routes.SIGNIN);
    },
    onError: (error) => {
      const errorMessage = error.response?.data.message;

      toast.error(errorMessage);
    },
  });
}
