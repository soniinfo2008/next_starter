import { ReactNode } from "react";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

const AppLayout = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export default AppLayout;
