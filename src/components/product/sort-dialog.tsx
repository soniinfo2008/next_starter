"use client";

import {
  ResponsiveDialog,
  ResponsiveDialogBody,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
} from "@/components/ui/responsive-dialog";

type SortDialogProps = {
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
};

const FILTER_CONSTANTS = [
  "Recomended",
  "What's New",
  "Price: High to Low",
  "Price: Low to High",
  "Discount: High to Low",
  "Discount: Low to High",
  "Name: Asc",
  "Name: Desc",
];

const SortDialog = ({ isOpen, onOpenChange }: SortDialogProps) => {
  return (
    <>
      <ResponsiveDialog open={isOpen} onOpenChange={onOpenChange}>
        <ResponsiveDialogContent>
          <ResponsiveDialogHeader className="border-b py-2">
            <ResponsiveDialogTitle>Sort</ResponsiveDialogTitle>
          </ResponsiveDialogHeader>
          <ResponsiveDialogBody className="max-h-full overflow-y-auto">
            <ul className="flex flex-col">
              {FILTER_CONSTANTS.map((item, index) => {
                return (
                  <li key={index}>
                    <button
                      type="button"
                      className="relative flex w-full cursor-pointer select-none items-center px-4 py-3 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    >
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-muted" />
                      {item.toString()}
                    </button>
                  </li>
                );
              })}
            </ul>
          </ResponsiveDialogBody>
        </ResponsiveDialogContent>
      </ResponsiveDialog>
    </>
  );
};

export default SortDialog;
