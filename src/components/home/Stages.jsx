import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IndependentPower from "../../assets/Img/independent-power.webp";
import industrialPark from "../../assets/Img/industrial-park.webp";
import selfSustainable from "../../assets/Img/self-sustainable.webp";
import imgIndicator from "../../assets/Img/img-indicator.svg";

const stages = [
  {
    id: 1,
    image: IndependentPower,
    title: "Independent Power <br/>Producer",
    phara:
      "Development of a 40MW Solar Power Park in Kancheepuram, reducing carbon emissions by approximately 56,000 metric tons annually.",
  },
  {
    id: 2,
    image: industrialPark,
    title: "Industrial Park",
    phara:
      "Cost-Effective, Net-Zero Ready Plug-and-Play Industrial Parks powered by Solar Energy and Battery Energy Storage Systems (BESS), tailored for industries dedicated to achieving RE100 goals and advancing sustainability.",
  },
  {
    id: 3,
    image: selfSustainable,
    title: "Self Sustainable <br/>Communities",
    phara:
      "Creation of Self-Sustaining Communities built using GFRG technology, offering 500,000 sq. ft of residential & community spaces and enabling over 5,000 workers to walk to work.",
  },
];

export default function Stages() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stages-heading",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.utils.toArray(".stage-row").forEach((row, index) => {
        gsap.fromTo(
          row,
          { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-14 md:py-22 px-4 overflow-hidden">
      <div className="sm:max-w-[90%] mx-auto">
        <h2 className="stages-heading text-[1.9rem] sm:text-4xl md:text-5xl text-primary text-center">
          Stages
        </h2>

        <div className="grid xl:grid-cols-3 mt-6 sm:mt-10">
          {stages.map((item, index) => (
            <div
              key={item.id}
              className={`stage-row flex relative ${index === stages.length - 1 ? "mb-0" : "mb-8 sm:mb-0"} ${index % 2 === 0 ? "flex-col sm:flex-row xl:flex-col" : "flex-col sm:flex-row-reverse xl:flex-col-reverse"}`}
            >
              <div className="h-[260px] sm:h-[300px] w-full sm:w-1/2 xl:w-full py-3 sm:p-12 z-1">
                <img src={item.image} alt="" className="rounded-xl w-full h-full object-cover" />
              </div>

              <div className="flex w-full sm:w-1/2 xl:w-full flex-col justify-center text-center xl:py-12 px-0 sm:px-4 text-center xl:h-[300px]">
                <h3 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4" dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className="text-base md:text-md 3xl:text-lg mx-1 sm:mx-4">{item.phara}</p>
              </div>

              <div className="hidden sm:block h-full xl:h-[unset] xl:w-full border border-dashed absolute top-0 left-1/2 xl:left-0 xl:top-1/2 xl:translate-y-1/2"></div>

              <img
                src={imgIndicator}
                alt="indicator"
                className={`hidden sm:block absolute top-1/2 left-1/2 w-5 origin-top z-0 ${index % 2 === 0 ? "-rotate-90 xl:rotate-0 xl:-translate-y-[8px] -translate-x-[16px] xl:translate-x-0" : "translate-x-[0px] rotate-90 xl:rotate-180 xl:translate-y-[10px]"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
