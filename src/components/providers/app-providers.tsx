"use client";

import { useEffect, useState } from "react";
import { SmoothScrollProvider } from "~/components/providers/smooth-scroll";
import { CustomCursor } from "~/components/layout/cursor";
import { Loader } from "~/components/layout/loader";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    setFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!ready) {
      document.documentElement.style.overflow = "hidden";
      return;
    }
    document.documentElement.style.overflow = "";
  }, [ready]);

  return (
    <SmoothScrollProvider>
      {!ready && <Loader onComplete={() => setReady(true)} />}
      {finePointer && ready && <CustomCursor />}
      <div className={finePointer && ready ? "hide-cursor" : undefined}>
        {children}
      </div>
    </SmoothScrollProvider>
  );
}
