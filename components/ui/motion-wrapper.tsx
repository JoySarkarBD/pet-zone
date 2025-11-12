"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

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
