"use client";

import { useEffect, useState } from "react";

import { useQueryParam } from "@/hooks/use-query-param";

import SortDialog from "./sort-dialog";

const SortFilter = () => {
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);
  const [sortModalParam, setSortModalParam] = useQueryParam("sort_modal");

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
      {/* Sort Trigger */}
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
            d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
          ></path>
        </svg>

        <span>Sort</span>
      </button>
      {/* Sort Dialogs --------------  */}
      <SortDialog isOpen={isFilterDialogOpen} onOpenChange={closeModal} />
    </>
  );
};

export default SortFilter;
