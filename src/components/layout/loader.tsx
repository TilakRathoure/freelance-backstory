"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "~/content/site";
import { prefersReducedMotion } from "~/lib/gsap";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      onComplete();
      return;
    }

    let frame = 0;
    let value = 0;

    const tick = () => {
      value += Math.random() * 8 + 2;
      if (value >= 100) {
        value = 100;
        setProgress(100);
        setTimeout(() => setExiting(true), 400);
        setTimeout(() => onComplete(), 1200);
        return;
      }
      setProgress(Math.floor(value));
      frame = window.setTimeout(tick, 40 + Math.random() * 60);
    };

    frame = window.setTimeout(tick, 200);
    return () => window.clearTimeout(frame);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          <motion.p
            className="text-label mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {site.tagline}
          </motion.p>
          <motion.h1
            className="font-serif text-5xl md:text-7xl tracking-tight text-ink"
            initial={{ opacity: 0, scale: 1.06, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {site.name}
          </motion.h1>
          <motion.p
            className="mt-10 font-sans text-sm tracking-[0.3em] text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {String(progress).padStart(3, "0")}
          </motion.p>
          <div className="mt-6 h-px w-40 overflow-hidden bg-beige">
            <motion.div
              className="h-full bg-gold"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
