import { ChevronLeftIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type FilterDialogProps = {
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
};

const MainFilterSheet = ({ isOpen, onOpenChange }: FilterDialogProps) => {
  return (
    <>
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetContent className="w-dvw p-0">
          <SheetHeader className="relative grid h-[3.5] grid-cols-3 items-center gap-3 space-y-0 p-3 text-center text-lg font-bold tracking-wide shadow-md">
            <div className="col-span-1 flex items-center justify-self-start">
              {/* Close Filter */}
              <SheetClose>
                <ChevronLeftIcon className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </SheetClose>

              {/* Clear All */}
              <span className="mx-2 h-6 w-px border-l-[1px]"></span>

              {/* Clear All RENDER IT CONDITIONALLY  */}
              {/* <button className="text-primary-500 text-xs hover:underline focus:outline-none">
                Clear All
              </button> */}
            </div>

            <h5 className="col-span-1 justify-self-center">Filter</h5>

            {/* Apply Button */}

            <Button className="col-span-1 h-auto justify-self-end rounded-full text-xs uppercase">
              Apply
            </Button>
          </SheetHeader>

          <div className="flex h-[calc(100dvh-3.5rem)] items-start">
            {/* Left Sidebar Section */}
            <div className="flex h-full w-2/6 flex-col overflow-y-auto bg-muted">
              <ul className="h-full w-full divide-y">
                {Array.from({ length: 50 }).map((_, index) => (
                  <li key={index}>
                    <button
                      className={cn(
                        "flex w-full items-center justify-between gap-1 border-l-4 p-3 text-left text-sm font-semibold tracking-wide focus:outline-none",
                        false
                          ? "border-primary bg-background"
                          : "border-muted bg-transparent"
                      )}
                    >
                      <span> Age {index} </span>

                      <div className="h-1.5 w-1.5 rounded-full bg-muted"></div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/*Right Section  */}
            <div className="h-full w-4/6 overflow-y-auto py-2 pl-2 pr-1">
              <div className="h-full w-full">
                {Array.from({ length: 50 }).map((_, index) => (
                  <p className="mt-4 first:mt-0" key={index}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Placeat quae sed, possimus modi atque vel eveniet accusamus
                    ad architecto nesciunt.
                  </p>
                ))}
                later
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MainFilterSheet;
