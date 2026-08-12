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
      className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />

        <div className="absolute bottom-0 right-[-100px] h-64 w-64 rounded-full bg-blue-500/5 blur-[100px] sm:h-[350px] sm:w-[350px] sm:blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-10 max-w-2xl sm:mb-14">
          <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.25em] text-cyan-400 sm:mb-4 sm:text-sm sm:tracking-[0.3em]">
            Contact
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s connect
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-white/60 sm:mt-6 sm:text-lg sm:leading-7">
            I&apos;m open to cybersecurity opportunities, security projects,
            and professional connections.
          </p>
        </div>

        {/* Contact content */}
        <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr] lg:gap-8">

          {/* Contact information */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm sm:p-9">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                Get in touch
              </h3>
            </div>

            <div className="space-y-5">

              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-start gap-3 sm:gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5 sm:h-11 sm:w-11">
                  <Mail className="h-5 w-5 text-cyan-400" />
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-widest text-white/40 sm:text-xs">
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
                className="group flex items-start gap-3 sm:gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5 sm:h-11 sm:w-11">
                  <Code2 className="h-5 w-5 text-cyan-400" />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-widest text-white/40 sm:text-xs">
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
                className="group flex items-start gap-3 sm:gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5 sm:h-11 sm:w-11">
                  <BriefcaseBusiness className="h-5 w-5 text-cyan-400" />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-widest text-white/40 sm:text-xs">
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
          <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 sm:p-9">

            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/5 blur-3xl sm:-right-24 sm:-top-24 sm:h-64 sm:w-64"
            />

            <div className="relative">

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-400 sm:text-xs sm:tracking-[0.25em]">
                Resume
              </span>

              <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:mt-5 sm:text-3xl">
                View my Resume.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50 sm:mt-4">
                Cybersecurity experience, skills, and certifications.
              </p>
            </div>

            <div className="relative mt-7 sm:mt-8">
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-300 transition hover:border-cyan-400/60 hover:bg-cyan-400/15 sm:w-auto"
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