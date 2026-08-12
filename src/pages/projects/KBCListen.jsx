import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectPageBackground from "../../components/layout/ProjectPageBackground";

export default function KBCListen() {
  const techStack = [
    "JavaScript",
    "React",
    "Vite",
    "Tailwind CSS",
    "REST APIs",
  ];

  const features = [
    "Digital radio streaming experience",
    "Podcast browsing and discovery",
    "Responsive modern web interface",
    "Component-based React architecture",
    "Optimized frontend performance",
  ];

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


        {/* Hero */}
        <div className="mt-12">

          <p className="uppercase tracking-[0.35em] text-sm text-sky-400">
            Full Stack Development
          </p>


          <h1 className="mt-4 text-5xl md:text-6xl font-black">
            KBC Listen
          </h1>


          <p className="
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-gray-400
          ">
            A modern radio and podcast streaming application built to deliver
            digital audio experiences through a responsive web platform.
            The project demonstrates modern frontend development,
            component architecture, and user-focused application design.
          </p>

        </div>


        {/* Screenshot Placeholder */}
        <div
          className="
            mt-12
            flex
            h-72
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-white/5
            text-gray-500
          "
        >
          Project Preview
        </div>


        {/* Overview */}
        <div className="mt-12">

          <h2 className="text-2xl font-bold">
            Overview
          </h2>

          <p className="
            mt-4
            max-w-4xl
            leading-8
            text-gray-400
          ">
            KBC Listen is a full-stack web application designed to provide
            users with access to digital radio content and podcasts through
            a clean, responsive interface. The project focuses on building
            a modern media experience using reusable React components and
            scalable frontend practices.
          </p>

        </div>


        {/* Technology */}
        <div className="mt-12">

          <h2 className="text-2xl font-bold">
            Technology Stack
          </h2>


          <div className="mt-5 flex flex-wrap gap-3">

            {techStack.map((tech) => (
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


        {/* Features */}
        <div className="mt-12">

          <h2 className="text-2xl font-bold">
            Key Features
          </h2>


          <ul className="
            mt-5
            space-y-3
            text-gray-400
          ">
            {features.map((feature) => (
              <li key={feature}>
                • {feature}
              </li>
            ))}
          </ul>

        </div>


        {/* Actions */}
        <div className="mt-12 flex flex-wrap gap-4">

          <a
            href="https://github.com/Pritt014/kbc-listen"
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-lg
              border
              border-white/20
              px-5
              py-3
              text-gray-200
              transition
              hover:border-sky-400
              hover:text-sky-400
            "
          >
            GitHub
          </a>


          <a
            href="https://69e8c82f25406927c5bacc38--kbc-listen.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-sky-500
              px-5
              py-3
              font-medium
              text-white
              transition
              hover:bg-sky-400
            "
          >
            Live Demo
            <ExternalLink size={18} />
          </a>

        </div>

      </div>

    </section>
  );
}
