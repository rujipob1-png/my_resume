import { lazy, Suspense, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScroll from "./components/SmoothScroll";

const StarsCanvas = lazy(() => import("./components/StarsCanvas"));

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="section-divider" />
    </div>
  );
}

export default function App() {
  const glowRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const onMouse = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }
    };
    const onScroll = () => {
      if (progressRef.current) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        progressRef.current.style.width = h > 0 ? (window.scrollY / h) * 100 + "%" : "0%";
      }
    };
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <SmoothScroll>
      <div className="noise relative min-h-screen bg-dark-950 text-dark-100">
        {/* Cursor glow — desktop only */}
        <div ref={glowRef} className="cursor-glow hidden lg:block" />
        {/* Scroll progress bar */}
        <div ref={progressRef} className="scroll-progress" />

        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Contact />
          <Footer />
        </div>
        <ScrollToTop />
      </div>
    </SmoothScroll>
  );
}
