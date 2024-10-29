import { Suspense } from "react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full lg:grid lg:grid-cols-2">
      <div className="hidden bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] lg:block">
        <div className="relative h-full w-4/5">
          {/* <Image
              src="/auth_banner.png"
              alt="Image"
              fill
              className="object-cover"
            /> */}
        </div>
      </div>
      <div className="flex h-full items-center justify-center">
        <div className="mx-auto grid gap-6">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </div>
      </div>
    </div>
  );
}
