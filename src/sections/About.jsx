import pritt from "../assets/images/prittdfir.png";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050816] py-32 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <div>
          <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
            Building secure digital experiences through development and
            cybersecurity.
          </h2>

          <div className="space-y-6 text-gray-300 text-lg leading-8">
            <p>
             I build secure, reliable, and user-focused digital solutions. My career began in digital media and web technologies, 
             where I gained hands-on experience delivering online platforms and improving digital experiences. 
             That foundation naturally led me into cybersecurity, where I discovered a passion for protecting the systems I was building.
            </p>

            <p>
              Today, I combine software development with defensive security, working on projects that span full-stack
              web applications, security automation, network analysis, digital forensics, and threat intelligence. I enjoy
              understanding how systems work, identifying weaknesses, and building practical solutions that improve resilience.
            </p>

            <p>
              Alongside my professional experience at KBC Digital, 
              I continue to expand my cybersecurity expertise through industry certifications, home lab environments, 
              and real-world projects that demonstrate both technical depth and continuous learning.
            </p>

            <p>
              I am seeking opportunities where I can contribute as a Cybersecurity Analyst or Security Engineer, 
              bringing together development experience, analytical thinking, and a security-first mindset.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {/* Portrait */}
            <div className="relative">
              {/* Ambient Glow */}
              <div className="absolute inset-8 rounded-full bg-cyan-400/10 blur-[90px]"></div>

              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={pritt}
                  alt="Pritt Nyerere"
                  className="w-full h-[540px] object-cover object-top transition-transform duration-500 hover:scale-105"
                />

                {/* Left Fade */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050816] to-transparent"></div>

                {/* Right Fade */}
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050816] to-transparent"></div>

                {/* Bottom Fade */}
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050816] via-[#050816]/70 to-transparent"></div>
              </div>
            </div>

            {/* Profile Card */}
            <div className="mt-8 rounded-3xl bg-[#0B1120]/70 backdrop-blur-md border border-white/10 p-8 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white">
                  🛡 Cybersecurity Analyst
                </h3>

                <p className="text-cyan-400 mt-2">
                  Building Secure Systems
                </p>
              </div>

              <div className="space-y-5 text-gray-300">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>Current Focus</span>
                  <span className="text-cyan-400 font-medium">
                    Cybersecurity
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>Experience</span>
                  <span className="text-cyan-400 font-medium">
                    Digital Media & IT
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>Specialization</span>
                  <span className="text-cyan-400 font-medium">
                    DFIR • Cyber Threat Intelligence
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>Development</span>
                  <span className="text-cyan-400 font-medium">
                    React • Node.js
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Location</span>
                  <span className="text-cyan-400 font-medium">
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