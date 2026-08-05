"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "~/content/testimonials";
import { Reveal } from "~/components/motion/reveal";

const stills = [
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index]!;

  return (
    <section className="relative overflow-hidden bg-bg">
      <div className="absolute inset-0 opacity-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={stills[index]}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={stills[index]!}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="section-lg relative z-10 mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mb-12 flex items-center justify-between">
            <p className="text-label">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </p>
            <div className="flex gap-6">
              <button
                type="button"
                className="link-underline text-label"
                onClick={() =>
                  setIndex(
                    (i) => (i - 1 + testimonials.length) % testimonials.length,
                  )
                }
                aria-label="Previous testimonial"
              >
                Prev
              </button>
              <button
                type="button"
                className="link-underline text-label"
                onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                aria-label="Next testimonial"
              >
                Next
              </button>
            </div>
          </div>
        </Reveal>

        <div className="min-h-[280px] md:min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={item.author}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(1.75rem,4.5vw,3.75rem)] leading-[1.15] text-ink"
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
            className="mt-12"
          >
            <p className="text-ink">{item.author}</p>
            <p className="text-label mt-2">{item.role}</p>
          </motion.footer>
        </AnimatePresence>
      </div>
    </section>
  );
}
