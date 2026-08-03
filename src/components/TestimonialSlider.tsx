"use client";

import { useEffect, useState } from "react";
import type { Testimonial } from "@/content/testimonials";

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [items.length]);

  const current = items[index];

  return (
    <div className="relative mx-auto max-w-3xl text-center">
      <blockquote
        key={index}
        className="animate-fade-in font-display text-2xl font-medium leading-snug text-navy md:text-3xl"
      >
        “{current.quote}”
      </blockquote>
      {current.author && (
        <p className="mt-4 text-sm font-medium text-ink-muted">{current.author}</p>
      )}
      <div className="mt-8 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Testimonio ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-teal" : "bg-line hover:bg-ink-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
