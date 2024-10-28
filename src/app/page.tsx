import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/components/ui/link";

export default function Home() {
  return (
    <div>
      <Link href="/app" className={buttonVariants({ variant: "outline" })}>
        Click here
      </Link>
    </div>
  );
}
