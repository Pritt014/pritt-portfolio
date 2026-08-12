export default function Footer() {
  return (
    <footer className="py-10 text-center text-gray-500 border-t border-white/10">

      <p>
        © {new Date().getFullYear()} Pritt Nyerere
      </p>

      <p className="text-sm mt-2">
        Cybersecurity Analyst | Digital Forensics | Security Engineering
      </p>

    </footer>
  );
}