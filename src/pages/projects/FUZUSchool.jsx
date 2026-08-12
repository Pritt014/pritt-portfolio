import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectPageBackground from "../../components/layout/ProjectPageBackground";

export default function FUZUSchool() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24 text-white">
      <ProjectPageBackground />
      <div className="relative mx-auto max-w-5xl">

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
            Full Stack Web Application
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-6xl">
            FUZU School
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            A full-stack school management and learning platform developed
            to demonstrate modern web application architecture, API
            development, database integration, and responsive frontend
            development.
          </p>

          {/* GitHub */}
          <div className="mt-8">
            <a
              href="https://github.com/Pritt014/fuzu-school-app"
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
                FUZU School was built as a practical full-stack development
                project, combining a modern frontend with a backend API and
                persistent data storage. The project demonstrates how
                different application layers work together to deliver a
                structured web platform.
              </p>
            </div>
          </div>

          {/* Capabilities + Stack */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">

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
                Key Capabilities
              </h2>

              <ul className="space-y-3 text-gray-300">
                <li>Responsive school web interface</li>
                <li>Component-based frontend architecture</li>
                <li>Backend API integration</li>
                <li>Database-backed application data</li>
                <li>RESTful application workflow</li>
                <li>Full-stack application structure</li>
              </ul>
            </div>

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
                Technology Stack
              </h2>

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "JavaScript",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "REST APIs",
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

          {/* Architecture */}
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
              Application Architecture
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-wider text-sky-400">
                  Frontend
                </p>

                <p className="mt-2 text-gray-300">
                  React-based responsive user interface
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-wider text-sky-400">
                  Backend
                </p>

                <p className="mt-2 text-gray-300">
                  Node.js and Express API layer
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-wider text-sky-400">
                  Database
                </p>

                <p className="mt-2 text-gray-300">
                  MongoDB persistent data storage
                </p>
              </div>

            </div>
          </div>

          {/* Repository */}
          <div className="mt-8">
            <a
              href="https://github.com/Pritt014/fuzu-school-app"
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
              View Source Code
              <ExternalLink size={18} />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
