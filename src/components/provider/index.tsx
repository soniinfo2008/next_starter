"use client";

import * as React from "react";

import { ErrorBoundary } from "react-error-boundary";

import { MainErrorFallback } from "@/components/errors/main";
import TanstackProvider from "@/components/provider/tanstack-provider";
import { ThemeProvider } from "@/components/provider/theme-provider";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <TanstackProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </TanstackProvider>
    </ErrorBoundary>
  );
};
