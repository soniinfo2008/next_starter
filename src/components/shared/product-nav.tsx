const ProductNav = () => {
  return (
    <nav
      className="minimum-width-rem {showCartSidebar ? 'z-50 ' : 'z-40'} fixed inset-x-0 top-0 flex h-14 w-full items-center justify-center px-3 sm:h-20 sm:px-10 lg:hidden"
      // style="background-color: rgba(255, 255, 255, {scrollY < 500 ? scrollY / 500 : 1});"
    >
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Back button */}

          <button
            type="button"
            className="frosted-white flex h-8 w-8 shrink-0 items-center justify-center rounded-full focus:outline-none"
            // on:click="{goback}"
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              ></path>
            </svg>
          </button>

          <div className="flex-1">
            <slot />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Search */}

          <button
            type="button"
            className="frosted-white flex h-8 w-8 items-center justify-center rounded-full focus:outline-none"
            // on:click="{() => (show = true)}"
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
          </button>

          {/* {#if show}
				<AutosuggestModal bind:show />
			{/if} */}

          {/* Wishlist--> */}

          <a
            href="/my/wishlist"
            aria-label="Click to visit wishlist"
            className="frosted-white flex h-8 w-8 items-center justify-center rounded-full focus:outline-none"
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              ></path>
            </svg>
          </a>

          {/* Cart */}

          <a
            href="/cart"
            aria-label="Click to visit cart"
            className="frosted-white relative flex h-8 w-8 items-center justify-center rounded-full focus:outline-none"
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

            <div className="bg-primary-500 absolute -right-1 -top-1 flex items-center justify-center rounded-full px-[5px] py-[0.8px] text-center text-xs font-bold uppercase text-white">
              0
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default ProductNav;
