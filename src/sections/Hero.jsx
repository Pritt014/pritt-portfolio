import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { profile, stats } from "../data/portfolio";
import profileImage from "../assets/images/pritt.png";
import AnimatedGrid from "../components/animations/AnimatedGrid";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#050816]"
    >
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatedGrid />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen grid lg:grid-cols-2 items-center px-6 gap-16">
        {/* LEFT SIDE */}

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.4em] text-sky-400 text-sm"
          >
            HELLO, I&apos;M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-5 text-6xl md:text-8xl font-black leading-none"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 text-2xl md:text-4xl font-semibold text-sky-400 h-14"
          >
            <TypeAnimation
              sequence={profile.titles.flatMap((title) => [title, 2200])}
              speed={55}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 max-w-2xl text-lg md:text-xl text-slate-300 leading-9"
          >
            {profile.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            {/* VIEW PROJECTS */}
            <a
              href="/projects"
              className="rounded-xl bg-sky-500 px-8 py-4 font-semibold text-white transition hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/30"
            >
              View Projects
            </a>

            {/* VIEW CV */}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-sky-500 px-8 py-4 font-semibold text-sky-300 transition hover:bg-sky-500/10"
            >
              View CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 grid grid-cols-3 gap-8"
          >
            {stats.map((item) => (
              <div key={item.label}>
                <h2 className="text-4xl md:text-5xl font-bold text-sky-400">
                  {item.value}
                </h2>

                <p className="mt-2 text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* IMAGE GLOW */}

          <div
            className="
              absolute
              w-[520px]
              h-[520px]
              rounded-full
              bg-sky-500/20
              blur-[120px]
            "
          />

          {/* IMAGE */}

          <div className="relative z-10">
            <img
              src={profileImage}
              alt={profile.name}
              className="
                relative
                z-10
                w-[480px]
                xl:w-[560px]
                object-contain
                select-none
              "
              draggable="false"
            />

            {/* LEFT FADE */}

            <div
              className="
                absolute
                inset-y-0
                left-0
                w-40
                bg-gradient-to-r
                from-[#050816]
                via-[#050816]/70
                to-transparent
                z-20
              "
            />

            {/* BOTTOM FADE */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                h-40
                bg-gradient-to-t
                from-[#050816]
                via-[#050816]/70
                to-transparent
                z-20
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}