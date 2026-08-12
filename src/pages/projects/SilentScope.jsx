import { motion } from "framer-motion";
import { ArrowLeft, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectPageBackground from "../../components/layout/ProjectPageBackground";

export default function SilentScope() {
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

          <p className="uppercase tracking-[0.35em] text-sky-400 text-sm">
            Cyber Threat Intelligence Tool
          </p>


          <h1 className="mt-4 text-5xl md:text-6xl font-black">
            Silent-Scope
          </h1>


          <p className="
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-gray-400
          ">
            Silent-Scope is an automated reconnaissance toolkit designed for
            penetration testing and threat intelligence gathering. It combines
            multiple information discovery techniques into a streamlined
            security assessment workflow.
          </p>


          {/* Actions */}
          <div className="mt-8 flex gap-4">

            <a
              href="https://github.com/Pritt014/silent-scope"
              target="_blank"
              rel="noopener noreferrer"
              className="
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
            </a>

          </div>


          {/* Features */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">


            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
              "
            >

              <h2 className="mb-4 text-xl font-bold">
                Key Capabilities
              </h2>


              <ul className="space-y-3 text-gray-300">
                <li>Domain reconnaissance</li>
                <li>DNS intelligence gathering</li>
                <li>WHOIS information lookup</li>
                <li>Automated reconnaissance workflow</li>
              </ul>

            </div>



            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
              "
            >

              <h2 className="mb-4 text-xl font-bold">
                Technology Stack
              </h2>


              <div className="flex flex-wrap gap-3">

                {[
                  "Python",
                  "AsyncIO",
                  "DNS",
                  "WHOIS",
                  "Nmap",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
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


          {/* Usage */}
          <div
            className="
              mt-12
              rounded-2xl
              border
              border-white/10
              bg-black/40
              p-6
            "
          >

            <div className="mb-4 flex items-center gap-3">

              <Terminal className="text-sky-400" />

              <h2 className="text-xl font-bold">
                Example Usage
              </h2>

            </div>


            <pre className="
              overflow-x-auto
              whitespace-pre-wrap
              text-gray-300
            ">
{`python silent_scope.py example.com

[+] Gathering DNS records
[+] Collecting WHOIS information
[+] Reconnaissance complete`}
            </pre>

          </div>


        </motion.div>

      </div>

    </section>
  );
}
