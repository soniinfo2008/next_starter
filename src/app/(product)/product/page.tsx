import MobileFilter from "@/components/product/mobile-filter";
import CatlogMav from "@/components/shared/catlog-nav";
import TopscrollProductIndicator from "@/components/shared/topscroll-product-indicator";

const ProductPage = () => {
  return (
    <div>
      <CatlogMav>
        <div className="flex max-w-max select-none flex-col items-start gap-1">
          <h5 className="w-40 shrink-0 truncate text-left capitalize leading-4">
            Men
          </h5>

          <p>
            60 Items
            {/* No Item */}
          </p>
        </div>
      </CatlogMav>

      <div className="h-[calc(100dvh-var(--bottom-menu-height))]">
        <TopscrollProductIndicator />

        <div className="mb-10 flex flex-col items-start sm:mb-20 lg:flex-row lg:gap-10 lg:p-10">
          <div className="sticky top-32 hidden lg:block">DesktopFilter</div>
          {/* <DesktopFilter
				className="sticky hidden lg:block {store?.hellobar?.active?.val ? 'top-32' : 'top-24'}"
				facets="{data.products.facets}"
				{priceRange}
				query="{data.query}"
				on:clearAll="{refreshData}" />
 */}

          <MobileFilter />

          {/* <MobileFilter
				bind:showFilter
				bind:showSort
				className="fixed bottom-0 border-t z-40 block lg:hidden"
				facets="{data.products.facets}"
				{priceRange}
				selected="{selectedFilter}"
				on:clearAll="{refreshData}" /> */}

          <div className="w-full flex-1 sm:px-10 sm:pt-10 lg:px-0 lg:pt-0">
            <div className="flex flex-col gap-5">
              <div className="hidden flex-wrap items-center justify-between gap-4 px-3 sm:px-0 lg:flex">
                {/* Name and count */}

                <div className="flex flex-wrap items-baseline gap-2">
                  <h1 className="capitalize">asdfasdfasdf</h1>

                  <p>
                    <span>- 100</span> <span>item</span>
                  </p>
                </div>

                {/* Sort */}

                <div className="flex flex-wrap items-center justify-between">
                  <label className="flex items-center gap-2">
                    <span>Sort : </span>

                    <select
                      // bind:value="{data.sort}"
                      className="focus:border-primary-500 hover:border-primary-500 max-w-max border-b bg-transparent pr-2 font-semibold focus:outline-none"
                      // on:change="{() => sortNow(data.sort)}"
                    >
                      <option value="{s.val}">asfasdf</option>
                    </select>
                  </label>
                </div>
              </div>

              {/* Category top description */}
              {/* <div className="prose max-w-none p-3 sm:p-0">
                adfaszzzzzzzzzzzzzzzzzdf
              </div> */}
            </div>

            {/* Products */}

            <ul className="grid grid-cols-2 items-start border-t sm:flex sm:flex-wrap sm:justify-between sm:gap-3 sm:border-t-0 lg:mt-5 lg:gap-6">
              <li>
                product card
                {/* <ProductCard product="{p}" /> */}
              </li>

              {/* Filter by tags */}

              <li className="hidden sm:block">
                dummy product
                {/* <DummyProductCard /> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
