"use client";

import {
  animate,
  HTMLMotionProps,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface MotionDivProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export function MotionDiv({ children, ...props }: MotionDivProps) {
  return <motion.div {...props}>{children}</motion.div>;
}

interface MotionNavProps extends HTMLMotionProps<"nav"> {
  children: ReactNode;
}

export function MotionNav({ children, ...props }: MotionNavProps) {
  return <motion.nav {...props}>{children}</motion.nav>;
}

interface MotionSpanProps extends HTMLMotionProps<"span"> {
  children: ReactNode;
}

export function MotionSpan({ children, ...props }: MotionSpanProps) {
  return <motion.span {...props}>{children}</motion.span>;
}

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export function Counter({
  from = 0,
  to,
  duration = 2,
  className = "",
  prefix = "",
  suffix = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest).toLocaleString();
  });
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
}
