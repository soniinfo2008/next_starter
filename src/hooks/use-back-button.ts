import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SHOW_BACK_BUTTON_PAGES = ["/"];

export function useBackButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [isBackButtonVisible, setIsBackButtonVisible] = useState(false);

  /* Check if the current route should show the back button */
  useEffect(() => {
    /* Set visibility of the back button based on the current route */
    setIsBackButtonVisible(!SHOW_BACK_BUTTON_PAGES.includes(pathname));
  }, [pathname]);

  /**
   * Go back to the previous page or homepage if the history length is less than 3.
   * We ensure this is only executed on the client-side.
   */
  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length < 3) {
      /* If history length is less than 3, navigate to the homepage */
      console.log("Redirecting to Home");
      router.push("/");
    } else {
      /* Otherwise, go back to the previous page */
      console.log("Navigating to previous page");
      router.back();
    }
  };

  return { goBack, isBackButtonVisible };
}
