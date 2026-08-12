import projectsBg from "../../assets/images/projects-bg.png";

export default function ProjectPageBackground() {
  return (
    <>
      {/* Project Page Background Image */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
          opacity-40
        "
        style={{ backgroundImage: `url(${projectsBg})` }}
      />

      {/* Near-Black Dark Blue Overlay */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#020914]/75
        "
      />

      {/* Subtle Bottom Fade */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-72
          bg-gradient-to-t
          from-[#01050a]
          via-[#01050a]/80
          to-transparent
        "
      />
    </>
  );
}