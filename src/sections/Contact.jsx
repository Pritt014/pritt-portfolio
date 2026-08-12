import {
  Mail,
  Code2,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s connect
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
            I&apos;m open to cybersecurity opportunities, security projects,
            and professional connections.
          </p>
        </div>

        {/* Contact content */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          {/* Contact information */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm sm:p-9">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white">
                Get in touch
              </h3>
            </div>

            <div className="space-y-5">
              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5">
                  <Mail className="h-5 w-5 text-cyan-400" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-white/80 transition group-hover:text-cyan-400">
                    {profile.email}
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5">
                  <Code2 className="h-5 w-5 text-cyan-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    GitHub
                  </p>

                  <p className="mt-1 text-sm text-white/80 transition group-hover:text-cyan-400">
                    Pritt014
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5">
                  <BriefcaseBusiness className="h-5 w-5 text-cyan-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-sm text-white/80 transition group-hover:text-cyan-400">
                    prittnyereredfir
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Resume CTA */}
          <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-7 sm:p-9">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/5 blur-3xl"
            />

            <div className="relative">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-400">
                Resume
              </span>

              <h3 className="mt-5 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                View my Resume.
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/50">
                Cybersecurity experience, skills, and certifications.
              </p>
            </div>

            <div className="relative mt-8">
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-300 transition hover:border-cyan-400/60 hover:bg-cyan-400/15"
              >
                View my Resume

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}