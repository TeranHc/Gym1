// Pega este código en: src/app/components/magicui/blur-fade.jsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../../lib/utils";

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.5,
  delay = 0,
  y = 10,
  inView = false,
  inViewMargin = "-50px",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: inViewMargin,
    once: true,
  });

  const combinedClassName = cn(className, "will-change-[transform,opacity]");

  const variants = {
    hidden: { y, opacity: 0, filter: "blur(4px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  const transition = {
    duration,
    delay,
    ease: "easeOut",
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? (isInView ? "visible" : "hidden") : "visible"}
      variants={variants}
      transition={transition}
      className={combinedClassName}
    >
      {children}
    </motion.div>
  );
}