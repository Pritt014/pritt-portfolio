import { motion } from "framer-motion";
import ProjectCard from "../components/cards/ProjectCard";
import { featuredProjects } from "../data/portfolio";
import projectsBg from "../assets/images/projects-bg.png";

export default function Projects() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      {/* Background Graphic Stack */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: `url(${projectsBg})`,
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/85 to-black" />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-16 h-64 w-80 -translate-x-1/2 rounded-full bg-sky-500/5 blur-[100px] sm:top-20 sm:h-[400px] sm:w-[700px] sm:blur-[140px]" />

      {/* Content Layout */}
      <div className="relative mx-auto max-w-7xl">

        {/* Page Header */}
        <header>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center sm:mb-14"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400 sm:text-sm sm:tracking-[0.35em]">
              Portfolio
            </span>

            <h1 className="mt-3 text-3xl font-black text-white sm:mt-4 sm:text-5xl md:text-6xl">
              Projects
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
              Cybersecurity tools, networking utilities, and full-stack
              applications built through hands-on development.
            </p>
          </motion.div>
        </header>

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="
            grid
            grid-cols-1
            gap-6
            sm:gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}