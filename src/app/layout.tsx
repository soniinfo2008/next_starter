import type { Metadata } from "next";

import "./globals.css";

[].forEach((item) => {
  console.log("something...", item);
});

const first_name = "ashutosh";
const last_name = "singh";
const full_name = `${first_name} ${last_name}`;

console.log(full_name);

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
