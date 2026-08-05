"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "~/content/testimonials";
import { Reveal } from "~/components/motion/reveal";
import { prefersReducedMotion } from "~/lib/gsap";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, []);

  const item = testimonials[index]!;

  return (
    <section className="bg-beige/50 px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1100px] text-center">
        <Reveal>
          <p className="text-label mb-10">Kind Words</p>
          <span className="font-serif text-7xl leading-none text-gold md:text-9xl">
            “
          </span>
        </Reveal>
        <div className="relative min-h-[220px] md:min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={item.author}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl leading-snug text-ink md:text-5xl"
            >
              {item.quote}
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait">
          <motion.footer
            key={item.author + "-meta"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10"
          >
            <p className="text-ink">{item.author}</p>
            <p className="text-label mt-2">{item.role}</p>
          </motion.footer>
        </AnimatePresence>
        <div className="mt-12 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.author}
              type="button"
              aria-label={`Show testimonial from ${t.author}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-8 rounded-full transition-colors duration-500 ${
                i === index ? "bg-gold" : "bg-ink/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
