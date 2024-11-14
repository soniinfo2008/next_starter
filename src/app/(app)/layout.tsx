import SiteFooter from "@/components/shared/site-footer";
import SiteNav from "@/components/shared/site-nav";

function ApplicationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pb-[var(--bottom-menu-height)] lg:pb-0">
      {/* <div className="{showCartSidebar || openSidebar ? 'h-screen overflow-hidden' : 'h-full'} antialiased"> */}
      {/* <Nav me="{data.me}" store="{data.store}" bind:showCartSidebar bind:openSidebar /> */}
      <SiteNav />

      {children}

      <SiteFooter />
    </div>
  );
}

export default ApplicationLayout;
