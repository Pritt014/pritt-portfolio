import { motion } from "framer-motion";
import {
  ShieldCheck,
  Code2,
  Wrench,
  ServerCog,
} from "lucide-react";
import skillsBg from "../assets/images/skillsbg.png";

const skillCategories = [
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    skills: [
      "Threat Hunting",
      "Cyber Threat Intelligence (CTI)",
      "Digital Forensics (DFIR)",
      "Incident Response",
      "SIEM",
      "Log Analysis",
      "Security Automation",
      "Security Engineering",
      "Network Security",
      "Vulnerability Assessment",
      "Impacket",
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: [
      "Python",
      "JavaScript",
      "React",
      "Node.js",
      "FastAPI",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Security Tools",
    icon: Wrench,
    skills: [
      "Wireshark",
      "TShark",
      "Nmap",
      "Nessus",
      "Metasploit",
      "Burp Suite",
    ],
  },
  {
    title: "Platforms & Technologies",
    icon: ServerCog,
    skills: [
      "Linux",
      "Git",
      "Docker",
      "MongoDB",
      "SQLite",
      "REST APIs",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-10 lg:py-24"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url(${skillsBg})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Ambient Glow */}
      <div className="absolute left-[-80px] top-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-[100px] sm:left-10 sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="absolute bottom-0 right-[-100px] h-72 w-72 rounded-full bg-cyan-400/5 blur-[120px] sm:h-96 sm:w-96 sm:blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-14"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 sm:text-sm sm:tracking-[0.35em]">
            Technical Skills
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Technologies &amp; Security Expertise
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-400 sm:mt-5 sm:text-lg sm:leading-8">
            A focused collection of cybersecurity knowledge, development
            technologies, and professional tools used to build secure systems,
            investigate threats, and deliver modern applications.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid gap-5 sm:gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
                  rounded-2xl
                  border
                  border-cyan-400/10
                  bg-[#0B1120]/85
                  p-5
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/40
                  sm:rounded-3xl
                  sm:p-8
                "
              >
                {/* Category Header */}
                <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-cyan-400/20
                      bg-cyan-400/10
                      sm:h-12
                      sm:w-12
                    "
                  >
                    <Icon
                      className="text-cyan-400"
                      size={22}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border
                        border-cyan-400/20
                        bg-slate-900/80
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-slate-300
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-cyan-400
                        hover:text-cyan-300
                        hover:shadow-[0_0_18px_rgba(34,211,238,.18)]
                        sm:px-4
                        sm:py-2
                        sm:text-sm
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center sm:mt-16"
        >
          <p className="mx-auto max-w-2xl text-xs leading-6 tracking-wide text-slate-500 sm:text-sm">
            Always learning • Building practical security solutions with
            Python, React &amp; modern cybersecurity tooling.
          </p>
        </motion.div>

      </div>
    </section>
  );
}