import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/layout/ScrollToTop";

import Hero from "./sections/Hero";
import FeaturedProjects from "./sections/FeaturedProjects";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

import Education from "./pages/Education";
import Projects from "./pages/Projects";

import TCPHawk from "./pages/projects/TCPHawk";
import SilentScope from "./pages/projects/SilentScope";
import KBCListen from "./pages/projects/KBCListen";
import NIMBA from "./pages/projects/NIMBA";
import FUZUSchool from "./pages/projects/FUZUSchool";
import AsyncScanX from "./pages/projects/AsyncScanX";
import FindWiFi from "./pages/projects/FindWiFi";
import Metasploitable2 from "./pages/projects/Metasploitable2";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <About />
      <Skills />
      <Contact />
    </>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6 text-center text-white">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
          404
        </p>

        <h1 className="mt-4 text-4xl font-black sm:text-6xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-gray-400">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <a
          href="/"
          className="mt-8 inline-flex rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400"
        >
          Back Home
        </a>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Reset scroll position on route changes */}
      <ScrollToTop />

      <Layout>
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Projects */}
          <Route
            path="/projects"
            element={<Projects />}
          />

          {/* Education */}
          <Route
            path="/education"
            element={<Education />}
          />

          {/* Individual Projects */}
          <Route
            path="/projects/tcp-hawk"
            element={<TCPHawk />}
          />

          <Route
            path="/projects/silent-scope"
            element={<SilentScope />}
          />

          <Route
            path="/projects/kbc-listen"
            element={<KBCListen />}
          />

          <Route
            path="/projects/nimba"
            element={<NIMBA />}
          />

          <Route
            path="/projects/fuzu-school"
            element={<FUZUSchool />}
          />

          <Route
            path="/projects/asyncscanx"
            element={<AsyncScanX />}
          />

          <Route
            path="/projects/find-wifi"
            element={<FindWiFi />}
          />

          <Route
            path="/projects/metasploitable2-pentest"
            element={<Metasploitable2 />}
          />

          {/* Fallback */}
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}