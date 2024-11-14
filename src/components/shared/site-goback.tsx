"use client";

import { useBackButton } from "@/hooks/use-back-button";

function SiteGoback() {
  const { isBackButtonVisible, goBack } = useBackButton();

  return (
    <>
      {isBackButtonVisible && (
        <button
          type="button"
          className="block shrink-0 focus:outline-none sm:hidden"
          onClick={goBack}
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
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            ></path>
          </svg>
        </button>
      )}
    </>
  );
}

export default SiteGoback;
