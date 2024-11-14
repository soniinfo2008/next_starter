"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { FOOTER_TABS } from "./mobile-footer-nav";

const SiteBottomNav = () => {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid h-[var(--bottom-menu-height)] w-full min-w-[var(--mobile-width)] grid-cols-5 items-center justify-items-center border-t bg-background [box-shadow:0px_-4px_10px_rgba(50,_50,_50,_0.2)]">
      {FOOTER_TABS.map((item) => {
        return (
          <Link
            href={item.link}
            className={cn(
              pathname === item.link ? "text-[#145cf2]" : "",
              "col-span-1 flex flex-col items-center justify-center overflow-hidden focus:outline-none"
            )}
            key={item.name}
          >
            <div>
              <item.icon
                className="h-6 w-6"
                color={pathname === item.link ? "#145cf2" : "#8f8f8f"}
              />
            </div>

            <span className="mt-1 text-xs font-medium tracking-wide">
              {item.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default SiteBottomNav;
