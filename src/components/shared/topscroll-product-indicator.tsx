"use client";

import { useDeviceType } from "@/hooks/use-device-type";
import useScrollTop from "@/hooks/use-scroll-top";

const TopscrollProductIndicator = () => {
  const { device, loading } = useDeviceType();

  const { isVisible, scrollToTop } = useScrollTop(10);

  const inSmallScreen = device === "Mobile" || device === "Tablet";

  if (loading) {
    return <div>Loading...</div>;
  }

  if (inSmallScreen && isVisible) {
    return (
      <>
        <button
          aria-label="Click to go to top"
          className="fixed left-[50%] top-28 z-40 flex min-w-24 -translate-x-1/2 transform select-none items-center justify-center gap-px whitespace-nowrap rounded-full bg-muted px-3 py-2 text-xs uppercase transition duration-300 hover:bg-opacity-80 focus:outline-none active:scale-90 sm:top-36"
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            ></path>
          </svg>

          <span className="ml-1 flex-1">60 / 120</span>
        </button>
      </>
    );
  }
};

export default TopscrollProductIndicator;
