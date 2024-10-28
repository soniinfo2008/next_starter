import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button variant="outline" asChild>
        <Link href="/login">Login</Link>
      </Button>
      <Button asChild>
        <Link href="/register">Register</Link>
      </Button>
      <Button variant="destructive" asChild>
        <Link href="/app">Application</Link>
      </Button>

      {/* <ModeToggle /> */}
    </div>
  );
}
