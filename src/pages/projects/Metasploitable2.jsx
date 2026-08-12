import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectPageBackground from "../../components/layout/ProjectPageBackground";

export default function Metasploitable2() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24 text-white">
      <ProjectPageBackground />
      <div className="relative mx-auto max-w-5xl">

        {/* Back */}
        <Link
          to="/projects"
          className="
            inline-flex
            items-center
            gap-2
            text-sky-400
            transition
            hover:text-sky-300
          "
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >

          {/* Header */}
          <p className="text-sm uppercase tracking-[0.35em] text-sky-400">
            Penetration Testing Lab
          </p>


          <h1 className="mt-4 text-5xl font-black md:text-6xl">
            Metasploitable 2 Pentest
          </h1>


          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            A hands-on penetration testing project conducted against the
            intentionally vulnerable Metasploitable 2 environment. The
            project demonstrates reconnaissance, vulnerability discovery,
            exploitation, enumeration, and security assessment techniques
            within a controlled lab environment.
          </p>


          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="https://github.com/Pritt014/metasploitable2-pentest"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-sky-500
                px-6
                py-3
                font-semibold
                text-black
                transition
                hover:bg-sky-400
              "
            >
              GitHub
              <ExternalLink size={18} />
            </a>

          </div>


          {/* Overview */}
          <div className="mt-16">

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-md
              "
            >

              <h2 className="text-xl font-bold">
                Project Overview
              </h2>

              <p className="mt-4 leading-8 text-gray-400">
                This project documents practical penetration testing
                techniques performed against Metasploitable 2, a purpose-built
                vulnerable virtual machine. The assessment follows a
                structured workflow beginning with reconnaissance and
                enumeration before progressing into vulnerability analysis
                and controlled exploitation.
              </p>

            </div>

          </div>


          {/* Assessment Areas & Stack */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">

            {/* Assessment Areas */}
            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-md
              "
            >

              <h2 className="mb-5 text-xl font-bold">
                Assessment Areas
              </h2>

              <ul className="space-y-3 text-gray-300">
                <li>Network reconnaissance</li>
                <li>Port and service enumeration</li>
                <li>Vulnerability identification</li>
                <li>Service analysis</li>
                <li>Controlled exploitation</li>
                <li>Post-exploitation assessment</li>
              </ul>

            </div>


            {/* Technology */}
            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-md
              "
            >

              <h2 className="mb-5 text-xl font-bold">
                Security Tools
              </h2>

              <div className="flex flex-wrap gap-3">

                {[
                  "Kali Linux",
                  "Nmap",
                  "Nessus",
                  "Metasploit",
                  "Wireshark",
                  "Burp Suite",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-sky-400/30
                      bg-sky-500/10
                      px-4
                      py-2
                      text-sm
                      text-sky-300
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          </div>


          {/* Methodology */}
          <div
            className="
              mt-8
              rounded-2xl
              border
              border-white/10
              bg-black/40
              p-6
            "
          >

            <h2 className="text-xl font-bold">
              Penetration Testing Workflow
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-4">

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-wider text-sky-400">
                  01
                </p>

                <h3 className="mt-2 font-semibold">
                  Reconnaissance
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Identify the target and map the exposed network surface.
                </p>
              </div>


              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-wider text-sky-400">
                  02
                </p>

                <h3 className="mt-2 font-semibold">
                  Enumeration
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Identify open ports, services, versions, and potential
                  attack surfaces.
                </p>
              </div>


              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-wider text-sky-400">
                  03
                </p>

                <h3 className="mt-2 font-semibold">
                  Analysis
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Assess discovered services and identify exploitable
                  weaknesses.
                </p>
              </div>


              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-wider text-sky-400">
                  04
                </p>

                <h3 className="mt-2 font-semibold">
                  Validation
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Validate findings through controlled exploitation within
                  the isolated lab.
                </p>
              </div>

            </div>

          </div>


          {/* Lab Note */}
          <div
            className="
              mt-8
              rounded-2xl
              border
              border-sky-400/20
              bg-sky-500/5
              p-6
            "
          >

            <h2 className="text-xl font-bold">
              Lab Environment
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              All testing was performed against an intentionally vulnerable
              lab environment designed for security training and penetration
              testing practice. The work focuses on developing practical
              offensive security skills within an authorized and controlled
              setting.
            </p>

          </div>


          {/* Repository */}
          <div className="mt-8">

            <a
              href="https://github.com/Pritt014/metasploitable2-pentest"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/20
                px-6
                py-3
                text-gray-200
                transition
                hover:border-sky-400
                hover:text-sky-400
              "
            >
              View Assessment Repository
              <ExternalLink size={18} />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
