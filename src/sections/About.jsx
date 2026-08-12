import pritt from "../assets/images/prittdfir.png";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050816] px-4 py-20 sm:px-6 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Left */}
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm sm:tracking-[0.25em]">
            About Me
          </p>

          <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-4xl md:text-5xl">
            Building secure digital experiences through development and
            cybersecurity.
          </h2>

          <div className="space-y-5 text-base leading-7 text-gray-300 sm:space-y-6 sm:text-lg sm:leading-8">
            <p>
              I build secure, reliable, and user-focused digital solutions.
              My career began in digital media and web technologies, where I
              gained hands-on experience delivering online platforms and
              improving digital experiences. That foundation naturally led me
              into cybersecurity, where I discovered a passion for protecting
              the systems I was building.
            </p>

            <p>
              Today, I combine software development with defensive security,
              working on projects that span full-stack web applications,
              security automation, network analysis, digital forensics, and
              threat intelligence. I enjoy understanding how systems work,
              identifying weaknesses, and building practical solutions that
              improve resilience.
            </p>

            <p>
              Alongside my professional experience at KBC Digital, I continue
              to expand my cybersecurity expertise through industry
              certifications, home lab environments, and real-world projects
              that demonstrate both technical depth and continuous learning.
            </p>

            <p>
              I am seeking opportunities where I can contribute as a
              Cybersecurity Analyst or Security Engineer, bringing together
              development experience, analytical thinking, and a security-first
              mindset.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">

            {/* Portrait */}
            <div className="relative">
              {/* Ambient Glow */}
              <div className="absolute inset-8 rounded-full bg-cyan-400/10 blur-[70px] sm:blur-[90px]" />

              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={pritt}
                  alt="Pritt Nyerere"
                  className="h-[420px] w-full object-cover object-top transition-transform duration-500 hover:scale-105 sm:h-[540px]"
                />

                {/* Left Fade */}
                <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-[#050816] to-transparent sm:block" />

                {/* Right Fade */}
                <div className="absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-[#050816] to-transparent sm:block" />

                {/* Bottom Fade */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050816] via-[#050816]/70 to-transparent sm:h-48" />
              </div>
            </div>

            {/* Profile Card */}
            <div className="mt-6 rounded-3xl border border-white/10 bg-[#0B1120]/70 p-5 shadow-xl backdrop-blur-md sm:mt-8 sm:p-8">

              <div className="mb-6 text-center sm:mb-8">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  🛡 Cybersecurity Analyst
                </h3>

                <p className="mt-2 text-sm text-cyan-400 sm:text-base">
                  Building Secure Systems
                </p>
              </div>

              <div className="space-y-4 text-sm text-gray-300 sm:space-y-5 sm:text-base">

                <div className="flex flex-col gap-1 border-b border-white/10 pb-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-gray-400">
                    Current Focus
                  </span>

                  <span className="font-medium text-cyan-400 sm:text-right">
                    Cybersecurity
                  </span>
                </div>

                <div className="flex flex-col gap-1 border-b border-white/10 pb-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-gray-400">
                    Experience
                  </span>

                  <span className="font-medium text-cyan-400 sm:text-right">
                    Digital Media &amp; IT
                  </span>
                </div>

                <div className="flex flex-col gap-1 border-b border-white/10 pb-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-gray-400">
                    Specialization
                  </span>

                  <span className="font-medium leading-6 text-cyan-400 sm:max-w-[65%] sm:text-right">
                    DFIR • Cyber Threat Intelligence
                  </span>
                </div>

                <div className="flex flex-col gap-1 border-b border-white/10 pb-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-gray-400">
                    Development
                  </span>

                  <span className="font-medium text-cyan-400 sm:text-right">
                    React • Node.js
                  </span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-gray-400">
                    Location
                  </span>

                  <span className="font-medium text-cyan-400 sm:text-right">
                    Nairobi, Kenya
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}