import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectPageBackground from "../../components/layout/ProjectPageBackground";

export default function FindWiFi() {
  const features = [
    "Nearby wireless-network discovery",
    "Windows netsh integration",
    "Clear command-line output",
    "Lightweight local execution",
    "Simple Python subprocess workflow",
  ];

  const technologies = ["Python", "Windows", "Subprocess", "netsh", "Wi-Fi"];

  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24 text-white">
      <ProjectPageBackground />
      <div className="relative mx-auto max-w-5xl">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sky-400 transition hover:text-sky-300"
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
          <p className="text-sm uppercase tracking-[0.35em] text-sky-400">
            Networking Utility
          </p>
          <h1 className="mt-4 text-5xl font-black md:text-6xl">Find-WiFi</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            A lightweight Windows utility that retrieves and displays nearby wireless
            networks through Python and the native netsh networking interface.
          </p>

          <a
            href="https://github.com/Pritt014/Find-WiFi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-black transition hover:bg-sky-400"
          >
            View Source Code
            <ExternalLink size={18} />
          </a>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h2 className="text-xl font-bold">Key Capabilities</h2>
              <ul className="mt-5 space-y-3 text-gray-300">
                {features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h2 className="text-xl font-bold">Technology Stack</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-sm text-sky-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          </div>

          <article className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-xl font-bold">Workflow</h2>
            <p className="mt-4 leading-8 text-gray-400">
              Find-WiFi runs the Windows netsh command from Python, captures its
              results, and displays the available wireless networks in a simple,
              accessible format.
            </p>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
