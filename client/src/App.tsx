import { useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Technology from "./components/Technology/Technology";
import Projects from "./components/Projects/Projects";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null!);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main content (scrollable) */}
      <div
        ref={scrollContainerRef}
        className="block lg:absolute lg:right-0 w-full lg:w-3/5 lg:h-screen leading-10 scroll-smooth"
      >
        <section id="about" className="snap-start">
          <About />
        </section>
        <section id="technology" className="snap-start">
          <Technology scrollerRef={scrollContainerRef} />
        </section>
        <section id="project" className="snap-start">
          <Projects />
        </section>
      </div>
    </div>
  );
}
