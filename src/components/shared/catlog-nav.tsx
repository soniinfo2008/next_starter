"use client";

import Link from "next/link";

import { useDeviceType } from "@/hooks/use-device-type";

import { ModeToggle } from "../theme/theme-toggle";
import SiteGoback from "./site-goback";

const CatlogMav = ({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) => {
  return (
    <>
      <>
        <nav className="shadow-xs sticky inset-x-0 top-0 z-50 w-full min-w-[var(--mobile-width)] border-b bg-background sm:h-[100px]">
          {/* hellobar  */}
          <div className="flex h-8 items-center justify-center bg-muted text-center text-sm tracking-wider">
            <span>20% discount across all categories</span>
          </div>

          <div className="flex h-14 w-full items-center justify-between gap-4 px-3 sm:h-20 sm:px-10 lg:gap-8">
            <div className="flex items-center gap-4">
              {/* Back button */}
              <SiteGoback />

              <Logo slotData={children} />
            </div>

            {/* Mega menu  */}
            {/* <div className="scrollbar-none hidden w-auto flex-1 items-start justify-start overflow-auto lg:flex">
            Mega menu
          </div> */}

            {/* Search box */}
            <div className="hidden w-full min-w-[200px] max-w-4xl flex-1 lg:block">
              <Link href="/category">Autocomplete</Link>
            </div>

            <div className="flex items-center gap-4 lg:gap-8">
              {/* <ModeToggle /> */}
              <ModeToggle className="hidden lg:inline-flex" />

              {/* Search mobile */}
              {/* <button
              type="button"
              aria-label="Click to search products..."
              className="block focus:outline-none lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
            </button> */}
              {/* Cart  */}
              <a
                href="/cart"
                className="relative flex flex-col items-center justify-center gap-1 focus:outline-none lg:border-b-4 lg:border-transparent"
                aria-label="Click to visit cart"
                data-sveltekit-preload-data
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  ></path>
                </svg>

                <span className="hidden text-center text-xs font-semibold tracking-wider lg:block">
                  Cart
                </span>

                <div className="absolute -right-1.5 -top-2 flex items-center justify-center rounded-full bg-primary/80 px-[5px] py-[0.8px] text-center text-xs font-bold uppercase text-primary-foreground">
                  0
                </div>
              </a>

              {/* User Porfile */}
              {/* <div>
              <div className="relative hidden lg:block">user dropdown</div>
            </div> */}

              {/* Menu mobile */}
              {/* <button
              aria-label="Sidebar"
              type="button"
              className="focus:outline-none lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </button> */}
              {/* Login */}

              <a
                href="{$page.data?.loginUrl || '/auth/login'}?ref={$page?.url?.pathname}{$page?.url
						?.search}"
                aria-label="Click to visit login"
                data-sveltekit-preload-data
              >
                <button
                  className="flex flex-col items-center justify-center gap-1 focus:outline-none lg:border-b-4 lg:border-transparent"
                  aria-label="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    ></path>
                  </svg>

                  <span className="hidden text-center text-xs font-semibold tracking-wider lg:block">
                    Login
                  </span>
                </button>
              </a>
            </div>
          </div>
        </nav>
      </>
    </>
  );
};

export default CatlogMav;

const Logo = ({ slotData }: { slotData: React.ReactNode }) => {
  const { device, loading } = useDeviceType();
  const inSmallScreen = device === "Mobile" || device === "Tablet";

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {inSmallScreen ? (
        <>
          {/* extenal data */}
          {slotData}
        </>
      ) : (
        <>
          {/* Website Logo/Name */}
          <Link href="/" aria-label="Go to home" className="block shrink-0">
            <h2 className="w-40 truncate sm:w-auto sm:max-w-sm">Apna Logo</h2>
          </Link>
        </>
      )}
    </>
  );
};
