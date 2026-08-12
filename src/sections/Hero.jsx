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
      <div className="pointer-events-none absolute inset-0 z-0">
        <AnimatedGrid />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-2 lg:gap-16 lg:px-6 lg:pb-0 lg:pt-20">

        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] text-sky-400 sm:text-sm sm:tracking-[0.4em]"
          >
            HELLO, I&apos;M
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-4xl font-black leading-none sm:mt-5 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {profile.name}
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-6 h-12 text-xl font-semibold text-sky-400 sm:mt-8 sm:h-14 sm:text-2xl md:text-4xl"
          >
            <TypeAnimation
              sequence={profile.titles.flatMap((title) => [title, 2200])}
              speed={55}
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl md:leading-9 lg:mx-0"
          >
            {profile.description}
          </motion.p>

          {/* ACTION BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-5 lg:justify-start"
          >
            {/* VIEW PROJECTS */}
            <a
              href="/projects"
              className="w-full rounded-xl bg-sky-500 px-8 py-4 text-center font-semibold text-white transition hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/30 sm:w-auto"
            >
              View Projects
            </a>

            {/* VIEW CV */}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl border border-sky-500 px-8 py-4 text-center font-semibold text-sky-300 transition hover:bg-sky-500/10 sm:w-auto"
            >
              View CV
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-14 grid grid-cols-3 gap-3 sm:mt-20 sm:gap-8"
          >
            {stats.map((item) => (
              <div key={item.label} className="min-w-0">
                <h2 className="text-2xl font-bold text-sky-400 sm:text-4xl md:text-5xl">
                  {item.value}
                </h2>

                <p className="mt-1 text-xs leading-5 text-gray-400 sm:mt-2 sm:text-sm md:text-base">
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
              h-[260px]
              w-[260px]
              rounded-full
              bg-sky-500/20
              blur-[80px]
              sm:h-[360px]
              sm:w-[360px]
              sm:blur-[100px]
              lg:h-[520px]
              lg:w-[520px]
              lg:blur-[120px]
            "
          />

          {/* IMAGE */}
          <div className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none">
            <img
              src={profileImage}
              alt={profile.name}
              className="
                relative
                z-10
                mx-auto
                w-full
                object-contain
                select-none
                lg:mx-0
                lg:w-[480px]
                xl:w-[560px]
              "
              draggable="false"
            />

            {/* LEFT FADE */}
            <div
              className="
                absolute
                inset-y-0
                left-0
                z-20
                hidden
                w-40
                bg-gradient-to-r
                from-[#050816]
                via-[#050816]/70
                to-transparent
                lg:block
              "
            />

            {/* BOTTOM FADE */}
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                z-20
                h-24
                bg-gradient-to-t
                from-[#050816]
                via-[#050816]/70
                to-transparent
                sm:h-32
                lg:h-40
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}