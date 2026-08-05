"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 38, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 420, damping: 38, mass: 0.35 });
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest(
        "[data-cursor]",
      ) as HTMLElement | null;
      if (target) {
        setLabel(target.dataset.cursor ?? "VIEW");
        setActive(true);
      } else {
        setLabel("");
        setActive(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-bg/70 text-[9px] font-medium tracking-[0.22em] text-bg"
        animate={{
          width: active ? 72 : 10,
          height: active ? 72 : 10,
          backgroundColor: active
            ? "rgba(248, 246, 242, 0.92)"
            : "rgba(248, 246, 242, 0.2)",
          color: active ? "#111111" : "#F8F6F2",
          borderColor: active
            ? "rgba(248, 246, 242, 0.95)"
            : "rgba(248, 246, 242, 0.55)",
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {active ? label : null}
      </motion.div>
    </motion.div>
  );
}
