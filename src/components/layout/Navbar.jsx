import { Link } from "react-router-dom";
import pnLogo from "../../assets/images/pnlogo.png";

export default function Navbar() {
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo = Home */}
        <Link
          to="/"
          onClick={handleLogoClick}
          className="flex items-center"
        >
          <img
            src={pnLogo}
            alt="PN Logo"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-gray-300 text-sm">

          {/* Home Sections */}
          <a
            href="/#about"
            className="hover:text-sky-400 transition-colors duration-300"
          >
            About
          </a>

          <a
            href="/#skills"
            className="hover:text-sky-400 transition-colors duration-300"
          >
            Skills
          </a>

          {/* Dedicated Projects Page */}
          <Link
            to="/projects"
            className="hover:text-sky-400 transition-colors duration-300"
          >
            Projects
          </Link>

          {/* Dedicated Education Page */}
          <Link
            to="/education"
            className="hover:text-sky-400 transition-colors duration-300"
          >
            Education
          </Link>

          {/* Home Section */}
          <a
            href="/#contact"
            className="hover:text-sky-400 transition-colors duration-300"
          >
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}