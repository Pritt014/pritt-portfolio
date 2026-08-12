import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mb-16"
    >
      <p className="uppercase tracking-[0.35em] text-sky-400 text-sm">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-5xl font-black text-white">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        {description}
      </p>
    </motion.div>
  );
}