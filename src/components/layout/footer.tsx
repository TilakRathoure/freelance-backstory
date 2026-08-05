import Link from "next/link";
import { site } from "~/content/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-bg px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <p className="font-serif text-[clamp(3rem,12vw,9rem)] leading-none tracking-tight text-ink">
          {site.name}
        </p>
        <div className="mt-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${site.email}`}
              className="text-body text-ink transition-colors duration-500 hover:text-gold"
              data-cursor="EMAIL"
            >
              {site.email}
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-label"
              data-cursor="OPEN"
            >
              Instagram
            </a>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link href="/#work" className="text-label" data-cursor="VIEW">
              Work
            </Link>
            <p className="text-sm text-muted">{site.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
