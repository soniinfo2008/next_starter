import type { Metadata } from "next";
import { Karla } from "next/font/google";

import { AppProvider } from "@/components/provider";
import "@/styles/globals.css";

const karla = Karla({ subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </head>
      <body className={`${karla.className}`}>
        <main className="relative flex min-h-dvh min-w-[var(--mobile-width)] flex-col bg-background antialiased">
          <div className="w-full flex-1">
            <AppProvider>{children}</AppProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
