import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-label mb-6">404</p>
      <h1 className="text-display-sm text-ink">Page not found</h1>
      <p className="text-body mt-6 max-w-md">
        This chapter doesn&apos;t exist — return to the studio to continue the
        story.
      </p>
      <Link
        href="/"
        className={buttonVariants({ variant: "primary", className: "mt-10" })}
      >
        Back home
      </Link>
    </section>
  );
}
