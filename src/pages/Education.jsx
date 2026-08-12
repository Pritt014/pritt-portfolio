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
        hover:shadow-[0_0_30px_rgba(34,211,238,.08)]
        sm:rounded-3xl
        sm:p-8
      "
    >
      {/* Card Header */}
      <div className="mb-5 flex items-start gap-3 sm:mb-6 sm:gap-4">
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
            size={22}
            className="text-cyan-400 sm:h-[25px] sm:w-[25px]"
          />
        </div>

        <div className="min-w-0">
          <h3 className="break-words text-lg font-semibold leading-snug text-white sm:text-xl">
            {title}
          </h3>

          <p className="mt-1 text-sm text-cyan-400">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Date */}
      {date && (
        <p className="mb-4 text-xs text-slate-500 sm:mb-5 sm:text-sm">
          {date}
        </p>
      )}

      {/* Description */}
      <p className="mb-5 text-sm leading-7 text-slate-300 sm:mb-6 sm:text-base">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2.5 sm:gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
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
              hover:-translate-y-0.5
              hover:border-cyan-400
              hover:text-cyan-300
              sm:px-4
              sm:py-2
              sm:text-sm
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Credential */}
      {credential && (
        <div className="mt-6 sm:mt-8">
          <a
            href={credential}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-5
              py-3
              text-sm
              font-medium
              text-cyan-300
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-400/15
              sm:w-auto
            "
          >
            View Credential
            <ExternalLink size={17} />
          </a>
        </div>
      )}
    </motion.div>
  );
}

export default function Education() {
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
        px-4
        py-24
        text-white
        sm:px-6
        sm:py-28
        md:px-10
        lg:py-32
      "
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url(${certBg})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Ambient Glow */}
      <div className="absolute left-[-80px] top-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-[100px] sm:left-10 sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="absolute bottom-0 right-[-100px] h-72 w-72 rounded-full bg-cyan-400/5 blur-[120px] sm:h-96 sm:w-96 sm:blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-20"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 sm:text-sm sm:tracking-[0.35em]">
            Professional Growth
          </p>

          <h1 className="text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Education &amp; Certifications
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
            Academic qualifications, verified industry credentials, and
            continuous professional development that support my work in
            cybersecurity, digital forensics, threat intelligence, and secure
            software engineering.
          </p>
        </motion.div>

        {/* Education */}
        <section className="mb-14 sm:mb-20">
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <GraduationCap className="h-6 w-6 text-cyan-400 sm:h-7 sm:w-7" />

            <h2 className="text-2xl font-semibold sm:text-3xl">
              Education
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8">
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

        {/* Verified Credentials */}
        <section className="mb-14 sm:mb-20">
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <ShieldCheck className="h-6 w-6 text-cyan-400 sm:h-7 sm:w-7" />

            <h2 className="text-2xl font-semibold sm:text-3xl">
              Verified Credentials
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
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

        {/* Currently Pursuing */}
        <section>
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <BookOpen className="h-6 w-6 text-cyan-400 sm:h-7 sm:w-7" />

            <h2 className="text-2xl font-semibold sm:text-3xl">
              Currently Pursuing
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
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

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center sm:mt-24"
        >
          <p className="mx-auto max-w-2xl text-xs leading-6 tracking-wide text-slate-500 sm:text-sm">
            Committed to continuous learning, professional excellence, and
            staying current with the evolving cybersecurity landscape.
          </p>
        </motion.div>

      </div>
    </main>
  );
}