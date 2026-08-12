import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{ duration: 0.25 }}
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-sky-400/10
        bg-[#071426]/90
        backdrop-blur-md
        transition
        hover:border-sky-400/40
        hover:shadow-[0_0_40px_rgba(56,189,248,0.15)]
      "
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#071426]
            via-black/20
            to-transparent
          "
        />

        {/* Category */}
        <span
          className="
            absolute
            left-5
            top-5
            rounded-full
            bg-sky-500/90
            px-3
            py-1
            text-xs
            font-semibold
            text-white
          "
        >
          {project.category}
        </span>

        {/* Title */}
        <h3
          className="
            absolute
            bottom-5
            left-5
            text-3xl
            font-black
            text-white
          "
        >
          {project.title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Description */}
        <p
          className="
            line-clamp-3
            leading-7
            text-gray-400
          "
        >
          {project.description}
        </p>

        {/* Technology */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-sky-400/20
                bg-sky-500/10
                px-3
                py-1
                text-xs
                text-sky-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-7 flex flex-wrap gap-3">

          {/* Project Page */}
          {project.page && (
            <Link
              to={project.page}
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-sky-500
                px-4
                py-2.5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-sky-400
              "
            >
              View Project
              <ArrowUpRight size={16} />
            </Link>
          )}

          {/* GitHub */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                rounded-lg
                border
                border-white/15
                px-4
                py-2.5
                text-sm
                text-gray-200
                transition
                hover:border-sky-400
                hover:text-sky-400
              "
            >
              GitHub
            </a>
          )}

          {/* Live Demo */}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-sky-500/60
                px-4
                py-2.5
                text-sm
                text-sky-400
                transition
                hover:bg-sky-500/10
              "
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}

        </div>

      </div>
    </motion.article>
  );
}