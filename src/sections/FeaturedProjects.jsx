import { motion } from "framer-motion";
import ProjectCard from "../components/cards/ProjectCard";
import { featuredProjects } from "../data/portfolio";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#020817]
        via-[#030b18]
        to-[#020617]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-14"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-sky-400 sm:text-sm sm:tracking-[0.35em]">
            Portfolio
          </p>

          <h2 className="mt-3 text-3xl font-black text-white sm:mt-4 sm:text-5xl md:text-6xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
            A collection of cybersecurity, networking, and full-stack
            applications demonstrating practical problem-solving,
            automation, and secure software development.
          </p>
        </motion.div>

        {/* Featured Project Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="
            grid
            grid-cols-1
            gap-6
            sm:gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {featuredProjects
            .filter((project) => project.featured)
            .map((project) => (
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