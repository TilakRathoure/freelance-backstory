"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "~/content/site";
import { Magnetic } from "~/components/motion/magnetic";

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 mix-blend-difference md:px-10">
        <Magnetic>
          <Link
            href="/"
            className="font-serif text-xl tracking-tight text-bg md:text-2xl"
            data-cursor="HOME"
            onClick={() => setOpen(false)}
          >
            {site.name}
          </Link>
        </Magnetic>

        <nav className="hidden items-center gap-12 md:flex">
          {site.nav.map((item) => (
            <Magnetic key={item.href}>
              <a
                href={item.href}
                className="text-label text-bg/90 transition-opacity duration-500 hover:opacity-100"
                data-cursor="GO"
              >
                {item.label}
              </a>
            </Magnetic>
          ))}
        </nav>

        <button
          type="button"
          className="relative z-[60] text-label text-bg md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-end bg-ink px-6 pb-16 pt-28 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex flex-col gap-8">
              {site.nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-5xl text-bg"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 * i,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
