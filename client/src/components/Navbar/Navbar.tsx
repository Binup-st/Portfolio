import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function Navbar() {
  const tl1 = useRef<gsap.core.Timeline>(null); // Timeline for ABOUT
  const tl2 = useRef<gsap.core.Timeline>(null); // Timeline for TECHNOLOGIES
  const tl3 = useRef<gsap.core.Timeline>(null); // Timeline for PROJECTS

  const [activeSelection, setActiveSelection] = useState("about");

  useGSAP(() => {
    gsap.utils.toArray("section").forEach((section) => {
      const sectionElement = section as HTMLElement;

      ScrollTrigger.create({
        trigger: sectionElement,
        start: "top center", // Trigger when the section reaches the center
        end: "bottom center",
        onEnter: () => setActiveSelection(sectionElement.id), // Update active sectionElement
        onEnterBack: () => setActiveSelection(sectionElement.id), // Handle scrolling up
      });
    });
  }, []);

  useGSAP(() => {
    // Timeline for ABOUT
    tl1.current = gsap
      .timeline({ paused: true })
      .to(".link1 div", {
        width: "80px",
        borderColor: "#FFFFFF",
        duration: 0.3,
      })
      .to(
        ".link1 h2",
        {
          color: "#FFFFFF",
          duration: 0,
        },
        "<"
      );

    // Timeline for TECHNOLOGIES
    tl2.current = gsap
      .timeline({ paused: true })
      .to(".link2 div", {
        width: "80px",
        borderColor: "#FFFFFF",
        duration: 0.3,
      })
      .to(
        ".link2 h2",
        {
          color: "#FFFFFF",
          duration: 0,
        },
        "<"
      );

    // Timeline for PROJECTS
    tl3.current = gsap
      .timeline({ paused: true })
      .to(".link3 div", {
        width: "80px",
        borderColor: "#FFFFFF",
        duration: 0.3,
      })
      .to(
        ".link3 h2",
        {
          color: "#FFFFFF",
          duration: 0,
        },
        "<"
      );
  }, []);

  useEffect(() => {
    if (activeSelection === "about") {
      tl1.current?.play();
      tl2.current?.reverse();
      tl3.current?.reverse();
    } else if (activeSelection === "technology") {
      tl2.current?.play();
      tl1.current?.reverse();
      tl3.current?.reverse();
    } else if (activeSelection === "project") {
      tl3.current?.play();
      tl1.current?.reverse();
      tl2.current?.reverse();
    }
  }, [activeSelection]);

  const handleLinks = (id: string) => {
    setActiveSelection(id);
    gsap.to(window, {
      duration: 1,
      scrollTo: `#${id}`,
      ease: "power2.out",
    });
  };

  return (
    <div className="lg:fixed left-0 top-0 w-full lg:w-2/5 h-[90vh] lg:h-screen flex flex-col mt-30 px-24 gap-13 lg:overflow-hidden">
      <div className="flex flex-col gap-3 lg:gap-5">
        <h1 className="text-5xl font-bold text-slateBlue">Binup Chaudhary</h1>
        <h2 className="text-4xl font-semibold text-slateBlue">
          Full Stack Developer
        </h2>
        <p className="text-gray-400 text-lg">
          I craft fast, responsive, and visually engaging websites that
          prioritize both user experience and performance.
        </p>
      </div>
      <div className="hidden md:flex flex-col gap-2">
        {/* ABOUT Link */}
        <div
          className="link1 flex gap-6 items-center cursor-pointer"
          onClick={() => handleLinks("about")}
        >
          <div className="line w-8 border-t-2 border-gray-400" />
          <h2 className="text-gray-400">ABOUT</h2>
        </div>

        {/* TECHNOLOGIES Link */}
        <div
          className="link2 flex gap-6 items-center cursor-pointer"
          onClick={() => handleLinks("technology")}
        >
          <div className="line w-8 border-t-2 border-gray-400" />
          <h2 className="text-gray-400">TECHNOLOGIES</h2>
        </div>

        {/* PROJECTS Link */}
        <div
          className="link3 flex gap-6 items-center cursor-pointer"
          onClick={() => handleLinks("project")}
        >
          <div className="line w-8 border-t-2 border-gray-400" />
          <h2 className="text-gray-400">PROJECTS</h2>
        </div>
      </div>

      {/* DOWNLOAD CV */}
      <a
        href="/assets/Binup-Chaudhary-CV.pdf"
        download="Binup-Chaudhary-CV.pdf"
      >
        <button className="bg-seaSalt rounded-full px-3 py-2 text-md font-semibold cursor-pointer">
          Download CV
        </button>
      </a>

      <div className="text-gray-400 flex gap-4">
        <a href="https://www.instagram.com/binup_ch/" target="_blank">
          <FaInstagram className="w-6 h-6 hover:text-white cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/binup-chaudhary-56966035b/"
          target="_blank"
        >
          <FaLinkedin className="w-6 h-6 hover:text-white cursor-pointer" />
        </a>
        <a href="https://github.com/Binup-st" target="_blank">
          <FaGithub className="w-6 h-6 hover:text-white cursor-pointer" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100007855427336"
          target="_blank"
        >
          <FaFacebook className="w-6 h-6 hover:text-white cursor-pointer" />
        </a>
      </div>
    </div>
  );
}
