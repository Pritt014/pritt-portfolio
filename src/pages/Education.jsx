import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  ShieldCheck,
  Award,
  BookOpen,
  Clock,
  ExternalLink,
} from "lucide-react";

import certBg from "../assets/images/certbg.png";

const education = [
  {
    degree: "Bachelor of Arts (B.A.)",
    field: "Human Resource Development",
    institution: "Kisii University",
    graduation: "2014",
    description:
      "Built a strong academic foundation in organizational development, leadership, research, communication, and analytical thinking. These competencies continue to complement my work in cybersecurity, digital forensics, and secure software development.",
    tags: [
      "Leadership",
      "Research",
      "Communication",
      "Critical Thinking",
      "Project Management",
    ],
  },
];

const certifications = {
  completed: [
    {
      title: "IBM Cybersecurity Analyst Professional Certificate",
      provider: "IBM • Coursera",
      date: "Completed May 2025",
      credential:
        "https://www.coursera.org/account/accomplishments/specialization/NE3ZIAF5D6D4",
      description:
        "Hands-on cybersecurity training covering SIEM, digital forensics, threat intelligence, incident response, vulnerability management, security operations and practical cybersecurity analysis.",
      tags: [
        "SIEM",
        "Threat Intelligence",
        "Incident Response",
        "Digital Forensics",
        "Cybersecurity Operations",
      ],
    },
  ],

  progress: [
    {
      title: "CompTIA Security+",
      provider: "CompTIA",
      date: "In Progress",
      description:
        "Building expertise in security concepts, threats, vulnerabilities, governance, identity management, cryptography and enterprise security.",
      tags: [
        "Network Security",
        "Identity Management",
        "Risk Management",
        "Threats",
      ],
    },
    {
      title: "CompTIA CySA+",
      provider: "CompTIA",
      date: "In Progress",
      description:
        "Developing practical skills in security monitoring, threat detection, vulnerability management and incident response using industry-standard methodologies.",
      tags: [
        "Threat Detection",
        "Security Monitoring",
        "Incident Response",
        "Vulnerability Management",
      ],
    },
  ],
};

function Card({
  icon,
  title,
  subtitle,
  date,
  description,
  tags,
  credential,
}) {
  const Icon = icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        rounded-3xl
        border
        border-cyan-400/10
        bg-[#0B1120]/85
        backdrop-blur-md
        p-8
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:-translate-y-1
        hover:shadow-[0_0_30px_rgba(34,211,238,.08)]
      "
    >
      <div className="flex items-start gap-4 mb-6">
        <div
          className="
            w-12
            h-12
            rounded-xl
            border
            border-cyan-400/20
            bg-cyan-400/10
            flex
            items-center
            justify-center
          "
        >
          <Icon
            size={25}
            className="text-cyan-400"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>

          <p className="text-cyan-400 text-sm mt-1">
            {subtitle}
          </p>
        </div>
      </div>

      {date && (
        <p className="text-slate-500 text-sm mb-5">
          {date}
        </p>
      )}

      <p className="text-slate-300 leading-7 mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
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
              hover:text-cyan-300
              hover:border-cyan-400
              hover:-translate-y-0.5
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {credential && (
        <div className="mt-8">
          <a
            href={credential}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-xl
              border
              border-cyan-400/20
              bg-cyan-400/10
              text-cyan-300
              font-medium
              transition-all
              duration-300
              hover:bg-cyan-400/15
              hover:border-cyan-400
            "
          >
            View Credential
            <ExternalLink size={18} />
          </a>
        </div>
      )}
    </motion.div>
  );
}

export default function Certifications() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        py-32
        px-6
        md:px-10
        text-white
      "
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url(${certBg})`,
        }}
      />

      <div className="absolute inset-0 bg-black/80" />

      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-400/5 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold mb-3">
            Professional Growth
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Education & Certifications
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
            Academic qualifications, verified industry credentials, and
            continuous professional development that support my work in
            cybersecurity, digital forensics, threat intelligence, and secure
            software engineering.
          </p>
        </motion.div>

                {/* =========================
            Education
        ========================== */}

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-cyan-400" />

            <h2 className="text-3xl font-semibold">
              Education
            </h2>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {education.map((item) => (
              <Card
                key={item.degree}
                icon={GraduationCap}
                title={`${item.degree} — ${item.field}`}
                subtitle={item.institution}
                date={`Graduation Year: ${item.graduation}`}
                description={item.description}
                tags={item.tags}
              />
            ))}
          </div>
        </section>

        {/* =========================
            Verified Credentials
        ========================== */}

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <ShieldCheck className="text-cyan-400" />

            <h2 className="text-3xl font-semibold">
              Verified Credentials
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.completed.map((item) => (
              <Card
                key={item.title}
                icon={Award}
                title={item.title}
                subtitle={item.provider}
                date={item.date}
                description={item.description}
                tags={item.tags}
                credential={item.credential}
              />
            ))}
          </div>
        </section>

        {/* =========================
            Currently Pursuing
        ========================== */}

        <section>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-cyan-400" />

            <h2 className="text-3xl font-semibold">
              Currently Pursuing
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.progress.map((item) => (
              <Card
                key={item.title}
                icon={Clock}
                title={item.title}
                subtitle={item.provider}
                date={item.date}
                description={item.description}
                tags={item.tags}
              />
            ))}
          </div>
        </section>

        {/* =========================
            Footer
        ========================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 text-center"
        >
          <p className="text-slate-500 text-sm tracking-wide">
            Committed to continuous learning, professional excellence, and
            staying current with the evolving cybersecurity landscape.
          </p>
        </motion.div>

      </div>
    </main>
  );
}