"use client";

import { useEffect, useState } from "react";

import { useQueryParam } from "@/hooks/use-query-param";

import MainFilterSheet from "./main-filter-sheet";

const MainFilter = () => {
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);
  const [sortModalParam, setSortModalParam] = useQueryParam("filter_modal");

  /* Effect to sync the modal state with the URL query param */
  useEffect(() => {
    setIsFilterDialogOpen(sortModalParam === "true");
  }, [sortModalParam]); /* Re-run this effect when the query param changes */

  /* Function to open the modal */
  const openModal = () => {
    setIsFilterDialogOpen(true);
    setSortModalParam("true"); /* Update the URL to include the query param */
  };

  /* Function to close the modal */
  const closeModal = () => {
    setIsFilterDialogOpen(false);
    setSortModalParam(null); /* Remove the query param from the URL */
    window.history.back();
  };
  return (
    <>
      {/* Filter Trigger */}
      <button
        type="button"
        className="flex items-center justify-center gap-2 px-3 py-2"
        onClick={openModal}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-muted" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
          ></path>
        </svg>

        <span>Filter</span>
      </button>
      {/* Filter Dialogs --------------  */}
      <MainFilterSheet isOpen={isFilterDialogOpen} onOpenChange={closeModal} />
    </>
  );
};

export default MainFilter;
