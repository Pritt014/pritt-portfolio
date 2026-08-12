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
      className="relative py-24 px-6 md:px-10 overflow-hidden"
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
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-400/5 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold mb-3">
            Technical Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technologies & Security Expertise
          </h2>

          <p className="mt-5 text-slate-400 max-w-3xl mx-auto leading-8">
            A focused collection of cybersecurity knowledge, development
            technologies, and professional tools used to build secure systems,
            investigate threats, and deliver modern applications.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid gap-8 md:grid-cols-2">
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
                  rounded-3xl
                  border
                  border-cyan-400/10
                  bg-[#0B1120]/85
                  backdrop-blur-md
                  p-8
                  hover:border-cyan-400/40
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="
                    flex
                    items-center
                    justify-center
                    w-12
                    h-12
                    rounded-xl
                    bg-cyan-400/10
                    border
                    border-cyan-400/20
                  ">
                    <Icon className="text-cyan-400" size={26} />
                  </div>

                  <h3 className="text-2xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-4
                        py-2
                        rounded-full
                        border
                        border-cyan-400/20
                        bg-slate-900/80
                        text-slate-300
                        text-sm
                        font-medium
                        transition-all
                        duration-300
                        hover:border-cyan-400
                        hover:text-cyan-300
                        hover:-translate-y-1
                        hover:shadow-[0_0_18px_rgba(34,211,238,.18)]
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
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-sm tracking-wide">
            Always learning • Building practical security solutions with Python,
            React & modern cybersecurity tooling.
          </p>
        </motion.div>
      </div>
    </section>
  );
}