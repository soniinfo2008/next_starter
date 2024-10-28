import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NextTopLoader from "nextjs-toploader";

import { AppProvider } from "@/app/provider";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Js Starter App",
  description:
    "A nicely crafted Next.js Starter App to kickstart your projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <NextTopLoader
          color="hsl(var(--primary))"
          showSpinner={false}
          zIndex={100000}
        />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
