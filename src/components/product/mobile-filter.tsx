import MainFilter from "./main-filter";
import SortFilter from "./sort-filter";

const MobileFilter = () => {
  return (
    <>
      <div className="fixed bottom-0 z-40 grid h-[calc(var(--bottom-menu-height)-15px)] w-full grid-cols-2 divide-x border-t bg-background font-medium shadow-md lg:hidden">
        <SortFilter />
        <MainFilter />
      </div>
    </>
  );
};

export default MobileFilter;
