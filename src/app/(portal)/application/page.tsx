import { ModeToggle } from "@/components/theme/theme-toggle";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function ApplicationHomePage() {
  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full flex-1"
        autoSaveId="application-layout"
      >
        <ResizablePanel
          id="application-sidebar"
          defaultSize={16}
          order={1}
          maxSize={20}
        >
          <aside className="flex h-full flex-col gap-2 overflow-hidden">
            <header className="flex h-12 flex-row items-center justify-between border-b px-2">
              <p>Schema</p>
            </header>
            <nav className="h-12 flex-1 overflow-auto px-2">list</nav>

            <footer className="flex h-12 flex-row items-center justify-end border-t px-2">
              <ModeToggle />
            </footer>
          </aside>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel id="main-application-pages" order={2}>
          <section className="flex h-full flex-col gap-2 overflow-hidden">
            <div className="flex h-12 flex-row items-center justify-between border-b px-2">
              <p>header</p>
            </div>
            <div className="h-12 flex-1 overflow-auto px-2">list</div>

            <div className="flex h-12 flex-row items-center justify-end border-t px-2">
              asdfasdf
            </div>
          </section>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
