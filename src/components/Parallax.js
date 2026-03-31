"use client";

import { useEffect, useRef } from "react";

export default function Parallax({ children, speed = 0.5, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (ref.current) {
            ref.current.style.transform = `translateY(${window.scrollY * speed}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Set initial value
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div 
      ref={ref}
      className={className} 
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}
