import { ReactNode } from "react";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex h-svh w-full flex-col overflow-hidden bg-background">
      {children}
    </main>
  );
};

export default AppLayout;
