"use client";

import { useRouter, useSearchParams } from "next/navigation";

import LoginForm from "@/features/auth/login/login-form";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams?.get("redirectTo");

  return (
    <div>
      <LoginForm
        onSuccess={() =>
          router.replace(`${redirectTo ? `${redirectTo}` : "/app"}`)
        }
      />
    </div>
  );
};

export default LoginPage;
