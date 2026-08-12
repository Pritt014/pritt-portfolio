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

          {/* All Projects */}
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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}