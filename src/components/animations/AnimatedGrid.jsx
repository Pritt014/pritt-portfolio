import { motion } from "framer-motion";

export default function AnimatedGrid() {
  return (
    <motion.div
      animate={{
        backgroundPosition: [
          "0px 0px",
          "0px 120px",
        ],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        absolute
        inset-0
        opacity-[0.08]
        pointer-events-none
      "
      style={{
        backgroundImage: `
          linear-gradient(rgba(56,189,248,.25) 1px, transparent 1px),
          linear-gradient(90deg, rgba(56,189,248,.25) 1px, transparent 1px)
        `,
        backgroundSize: "70px 70px",
        maskImage:
          "radial-gradient(circle at center, black, transparent 75%)",
      }}
    />
  );
}