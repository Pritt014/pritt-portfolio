import { motion } from "framer-motion";
import ProjectCard from "../components/cards/ProjectCard";
import { featuredProjects } from "../data/portfolio";
import projectsBg from "../assets/images/projects-bg.png";

export default function Projects() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      {/* Background Graphic Stack */}
      <div 
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 bg-gradient-to-b from-black/60 via-black/85 to-black"
        style={{ backgroundImage: `url(${projectsBg})` }}
      />
      <div className="pointer-events-none absolute left-1/2 top-20 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-sky-500/5 blur-[140px]" />

      {/* Content Layout */}
      <div className="relative mx-auto max-w-7xl">
        <header>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">
              Portfolio
            </span>
            <h1 className="mt-4 text-5xl font-black text-white md:text-6xl">
              Projects
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
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
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
