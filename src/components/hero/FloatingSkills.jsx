import { motion } from "framer-motion";

const skills = [
  "Python",
  "React",
  "Linux",
  "Wireshark",
  "Nmap",
  "Splunk",
  "DFIR",
  "FastAPI",
];

export default function FloatingSkills() {
  return (
    <>
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            top: `${15 + (index % 4) * 22}%`,
            left: index < 4 ? "-10%" : "85%",
          }}
        >
          <div className="rounded-xl border border-sky-500/20 bg-white/5 px-4 py-2 backdrop-blur-md shadow-lg">
            <span className="text-sm text-sky-300">
              {skill}
            </span>
          </div>
        </motion.div>
      ))}
    </>
  );
}