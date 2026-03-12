"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const CometCard = ({
  children = null,
  rotateDepth = 25,
  translateDepth = 30,
  className = "",
}) => {
  const containerRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [rotateDepth, -rotateDepth]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-rotateDepth, rotateDepth]);

  const translateX = useTransform(mouseX, [-0.5, 0.5], [-translateDepth, translateDepth]);
  const translateY = useTransform(mouseY, [-0.5, 0.5], [-translateDepth, translateDepth]);

  const handleMouseMove = (e: any) => {
    const node = containerRef.current as any;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative", className)}
      style={{
        perspective: "1200px",
        rotateX,
        rotateY,
        x: translateX,
        y: translateY,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
};
