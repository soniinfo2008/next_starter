import Link from "next/link";

import SiteBottomNav from "@/components/shared/site-bottom-nav";

// import SiteMobileFooter from "@/components/shared/site-mobile-footer";

const HomePage = () => {
  return (
    <div>
      <Link href="/categories">Category page</Link>

      {/* <div className="block lg:hidden">
        <SiteMobileFooter />
      </div> */}

      {/* MOBILE FOOTER  */}
      <div className="block lg:hidden">
        <SiteBottomNav />
      </div>
    </div>
  );
};

export default HomePage;
