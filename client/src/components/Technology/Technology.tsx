import { useRef } from "react";
import { data } from "./data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TechnologyProps {
  scrollerRef: React.RefObject<HTMLDivElement | null>;
}

const Technology: React.FC<TechnologyProps> = ({ scrollerRef }) => {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    progressRefs.current.forEach((progressBar) => {
      if (!progressBar) return;

      gsap.from(progressBar, {
        width: "0%",
        duration: 2,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".progress_bar",
          scroller: scrollerRef.current,
        },
      });
    });
  }, []);

  return (
    <div className="flex flex-col gap-8 h-screen justify-center">
      <h2 className=" lg:hidden text-3xl mb-7 text-seaSalt text-center uppercase font-semibold">
        Technology
      </h2>

      {data.map((item, index) => (
        <div
          key={item.id}
          className="flex justify-between items-center px-10 w-4/5 mx-auto"
        >
          {/* Technology Name */}
          <div className="text-gray-400 text-lg lg:text-2xl w-20 lg:mr-10 hover:text-seaSalt">
            {item.name}
          </div>

          {/* Progress Bar */}
          <div className="progress_bar relative w-20 lg:w-80 h-3 bg-gray-700 rounded-full overflow-hidden">
            <div
              ref={(el) => {
                progressRefs.current[index] = el; // Assign the element without returning it
              }}
              className="absolute h-full bg-seaSalt"
              style={{ width: `${item.proficiency}%` }}
            />
          </div>

          {/* Proficiency Percentage */}
          <span className="text-gray-400 text-lg ml-4">
            {item.proficiency}%
          </span>
        </div>
      ))}
    </div>
  );
};

export default Technology;
