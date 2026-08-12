import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectPageBackground from "../../components/layout/ProjectPageBackground";

export default function NIMBA() {
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
            Full Stack Weather Application
          </p>


          <h1 className="mt-4 text-5xl font-black md:text-6xl">
            NIMBA
          </h1>


          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            NIMBA — Know Your Sky is a weather intelligence application
            built to provide current weather conditions, forecasts, and
            hourly weather information through a Python-powered backend
            integrated with the OpenWeather API.
          </p>


          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="https://github.com/Pritt014/nimba"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
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
                NIMBA combines a lightweight Python web backend with
                external weather services to transform live meteorological
                data into a clean, user-focused weather experience. The
                application demonstrates API integration, backend routing,
                asynchronous HTTP requests, data handling, and web
                application development.
              </p>

            </div>

          </div>


          {/* Capabilities & Stack */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">

            {/* Capabilities */}
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
                <li>Current weather conditions</li>
                <li>Multi-day weather forecasts</li>
                <li>Hourly weather data</li>
                <li>OpenWeather API integration</li>
                <li>Location-based weather queries</li>
                <li>Backend API routing</li>
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
                Technology Stack
              </h2>

              <div className="flex flex-wrap gap-3">

                {[
                  "Python",
                  "FastAPI",
                  "Jinja2",
                  "HTTPX",
                  "OpenWeather API",
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
                  Client
                </p>

                <p className="mt-2 text-gray-300">
                  Browser-based weather interface
                </p>
              </div>


              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-wider text-sky-400">
                  Backend
                </p>

                <p className="mt-2 text-gray-300">
                  FastAPI application and API routes
                </p>
              </div>


              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-wider text-sky-400">
                  Data
                </p>

                <p className="mt-2 text-gray-300">
                  OpenWeather external API
                </p>
              </div>

            </div>

          </div>


          {/* Repository */}
          <div className="mt-8">

            <a
              href="https://github.com/Pritt014/nimba"
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
