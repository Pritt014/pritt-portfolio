import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectPageBackground from "../../components/layout/ProjectPageBackground";

export default function TCPHawk() {
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
            hover:text-sky-300
            mb-10
          "
        >
          ← Back to Projects
        </Link>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <p className="uppercase tracking-[0.35em] text-sky-400 text-sm">
            Networking Security Tool
          </p>


          <h1 className="mt-4 text-5xl md:text-6xl font-black">
            TCP Hawk
          </h1>


          <p className="
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-gray-400
          ">
            TCP Hawk is a Python-based network traffic analysis utility
            designed for packet inspection, troubleshooting, and security
            analysis.
          </p>


          {/* Actions */}
          <div className="mt-8">

            <a
              href="https://github.com/Pritt014/tcp-hawk"
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
                <li>TCP packet inspection</li>
                <li>Network traffic analysis</li>
                <li>Protocol troubleshooting</li>
                <li>Security automation</li>
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


              <p className="text-gray-300">
                Python • Sockets • Networking • Security Automation
              </p>

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

            <h2 className="mb-4 text-xl font-bold">
              Example Usage
            </h2>


            <pre className="text-gray-300">
{`python tcp_hawk.py

[+] Starting packet analysis
[+] Monitoring TCP traffic
[+] Analysis complete`}
            </pre>

          </div>


        </motion.div>

      </div>

    </section>
  );
}
