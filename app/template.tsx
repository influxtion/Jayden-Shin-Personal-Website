"use client";

import { MotionConfig, motion } from "framer-motion";
import { stepped } from "./components/pixel";

// Re-mounts on every tab change: the new page wipes in top-down in hard steps.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)", transitionEnd: { clipPath: "none" } }}
        transition={{ duration: 0.36, ease: stepped(8) }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
