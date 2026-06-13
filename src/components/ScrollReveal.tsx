"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Props {
  children: ReactNode;
  className?: string;
  /** Stagger child elements matching this selector (e.g. "[data-reveal-item]") */
  itemSelector?: string;
  y?: number;
}

/**
 * Wraps a section and fades/slides its children in as it scrolls into view.
 * If `itemSelector` is provided, matching descendants are staggered individually;
 * otherwise the whole wrapper animates as one block.
 */
export default function ScrollReveal({
  children,
  className,
  itemSelector,
  y = 40,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = itemSelector
      ? el.querySelectorAll(itemSelector)
      : el;

    const tween = gsap.from(targets, {
      opacity: 0,
      y,
      duration: 0.8,
      ease: "power3.out",
      stagger: itemSelector ? 0.12 : 0,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [itemSelector, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
