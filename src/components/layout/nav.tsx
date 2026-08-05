"use client";

import Link from "next/link";
import { site } from "~/content/site";
import { Magnetic } from "~/components/motion/magnetic";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-10">
        <Magnetic>
          <Link
            href="/"
            className="font-serif text-xl tracking-tight text-bg md:text-2xl"
            data-cursor="HOME"
          >
            {site.name}
          </Link>
        </Magnetic>
        <nav className="flex items-center gap-8 md:gap-12">
          {site.nav.map((item) => (
            <Magnetic key={item.href}>
              <a
                href={item.href}
                className="text-label text-bg/90 transition-colors duration-500 hover:text-bg"
                data-cursor="GO"
              >
                {item.label}
              </a>
            </Magnetic>
          ))}
        </nav>
      </div>
    </header>
  );
}
