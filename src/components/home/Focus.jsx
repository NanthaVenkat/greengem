import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import solarEnergy from "../../assets/Img/solar-energy.webp";
import windEnergy from "../../assets/Img/wind-energy.webp";
import batteryStorage from "../../assets/Img/battery-storage-system.webp";
import agriPhotovoltaics from "../../assets/Img/solar-energy.webp";

const powerSources = [
  {
    id: 1,
    Image: solarEnergy,
    Title: "Solar Energy",
  },
  {
    id: 2,
    Image: windEnergy,
    Title: "Wind Energy",
  },
  {
    id: 3,
    Image: batteryStorage,
    Title: "Battery Energy Storage Systems(BESS)",
  },
  {
    id: 4,
    Image: agriPhotovoltaics,
    Title: "Agri-Photovoltaics",
  },
];

export default function Focus() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".focus-heading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".focus-card",
        { y: 55, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".focus-grid",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-14 md:py-24 px-3.5 bg-white">
      <div className="2xl:max-w-[1440px] 3xl:max-w-[1540px] 4xl:max-w-[1720px] mx-auto text-center">
        <h3 className="focus-heading font-bold text-3xl mb-3">Our Focus</h3>
        <h2 className="focus-heading text-4xl sm:text-5xl mb-16">
          Areas & Future Capabilities
        </h2>

        <div className="focus-grid w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {powerSources.map((powerSource) => (
            <div
              key={powerSource.id}
              style={{ backgroundImage: `url(${powerSource.Image})` }}
              className="focus-card inline-flex p-7 bg-cover bg-center rounded-2xl h-[460px] sm:h-[560px]"
            >
              <p className="text-white text-left font-bold text-2xl mt-auto mb-6">
                {powerSource.Title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
