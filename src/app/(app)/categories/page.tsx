import Link from "next/link";

import SiteBottomNav from "@/components/shared/site-bottom-nav";

const Category = () => {
  return (
    <div>
      <Link href="/">Home page</Link>
      <Link href="/product">Product page</Link>

      {/* MOBILE FOOTER  */}
      <div className="block lg:hidden">
        <SiteBottomNav />
      </div>
    </div>
  );
};

export default Category;
