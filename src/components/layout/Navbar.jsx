import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import pnLogo from "../../assets/images/pnlogo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    setIsMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">

        {/* Logo = Home */}
        <Link
          to="/"
          onClick={handleLogoClick}
          className="flex items-center"
        >
          <img
            src={pnLogo}
            alt="PN Logo"
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">

          {/* Home Sections */}
          <a
            href="/#about"
            className="transition-colors duration-300 hover:text-sky-400"
          >
            About
          </a>

          <a
            href="/#skills"
            className="transition-colors duration-300 hover:text-sky-400"
          >
            Skills
          </a>

          {/* Dedicated Projects Page */}
          <Link
            to="/projects"
            className="transition-colors duration-300 hover:text-sky-400"
          >
            Projects
          </Link>

          {/* Dedicated Education Page */}
          <Link
            to="/education"
            className="transition-colors duration-300 hover:text-sky-400"
          >
            Education
          </Link>

          {/* Home Section */}
          <a
            href="/#contact"
            className="transition-colors duration-300 hover:text-sky-400"
          >
            Contact
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-200 transition hover:border-sky-400/40 hover:text-sky-400 md:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`border-t border-white/10 bg-[#050816]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 py-4 sm:px-6">

          <a
            href="/#about"
            onClick={closeMenu}
            className="rounded-lg px-4 py-3 text-sm text-gray-300 transition-colors duration-300 hover:bg-white/5 hover:text-sky-400"
          >
            About
          </a>

          <a
            href="/#skills"
            onClick={closeMenu}
            className="rounded-lg px-4 py-3 text-sm text-gray-300 transition-colors duration-300 hover:bg-white/5 hover:text-sky-400"
          >
            Skills
          </a>

          <Link
            to="/projects"
            onClick={closeMenu}
            className="rounded-lg px-4 py-3 text-sm text-gray-300 transition-colors duration-300 hover:bg-white/5 hover:text-sky-400"
          >
            Projects
          </Link>

          <Link
            to="/education"
            onClick={closeMenu}
            className="rounded-lg px-4 py-3 text-sm text-gray-300 transition-colors duration-300 hover:bg-white/5 hover:text-sky-400"
          >
            Education
          </Link>

          <a
            href="/#contact"
            onClick={closeMenu}
            className="rounded-lg px-4 py-3 text-sm text-gray-300 transition-colors duration-300 hover:bg-white/5 hover:text-sky-400"
          >
            Contact
          </a>

        </div>
      </div>
    </nav>
  );
}