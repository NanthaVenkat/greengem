import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import vishnuImg from "../../assets/Img/vishnu.webp";
import nishtaImg from "../../assets/Img/nishta.webp";
import dhiaanImg from "../../assets/Img/dhiaan.webp";
import srinivasanImg from "../../assets/Img/srinivasan.webp";
import shakthiImg from "../../assets/Img/shakthi.webp";

const Teams = [
  {
    id: 1,
    Image: vishnuImg,
    name: "Mr. Vishnu Prasath",
    designation: "Execution",
    phara:
      "A self-made millionaire and young entrepreneur, with multiple million $+ exits to investors now dedicated to building Green Gem.",
  },
  {
    id: 2,
    Image: nishtaImg,
    name: "Mrs. Nishta Srinivasan",
    designation: "Execution",
    phara:
      "A self-made millionaire and young entrepreneur, with multiple million $+ exits to investors now dedicated to building Green Gem.",
  },
  {
    id: 3,
    Image: dhiaanImg,
    name: "Mr. Dhiaan Srinivasan",
    designation: "Investor & Advisor",
    phara:
      "A self-made millionaire and young entrepreneur, with multiple million $+ exits to investors now dedicated to building Green Gem.",
  },
  {
    id: 4,
    Image: srinivasanImg,
    name: "Mr. K Srinivasan",
    designation: "Investor & Advisor",
    phara:
      "A self-made millionaire and young entrepreneur, with multiple million $+ exits to investors now dedicated to building Green Gem.",
  },
  {
    id: 5,
    Image: shakthiImg,
    name: "Mrs. Shakthi Srinivasan",
    designation: "Investor & Advisor",
    phara:
      "A self-made millionaire and young entrepreneur, with multiple million $+ exits to investors now dedicated to building Green Gem.",
  },
];

export default function MeetMyTeam() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-intro",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".team-slider-wrap",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".team-slider-wrap",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-14 md:pt-24 px-3.5">
      <div className="2xl:max-w-[1440px] 3xl:max-w-[1540px] 4xl:max-w-[1720px] mx-auto">
        <h2 className="team-intro text-primary text-4xl sm:text-5xl font-medium mb-4 sm:mb-5">
          Meet the team
        </h2>
        <p className="team-intro text-secondary text-xl sm:text-2xl max-w-2xl mb-5">
          Our team brings decades of renewable solar energy, asset management
          and construction.
        </p>

        <div className="team-slider-wrap lg:px-10">
          <Swiper
            modules={[Navigation, Scrollbar]}
            navigation={{
              nextEl: ".team-next",
              prevEl: ".team-prev",
            }}
            scrollbar={{
              el: ".team-scrollbar",
              draggable: true,
              hide: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 1.5,
              },
              1440: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={60}
            className="mt-10 sm:mt-16 px-12"
          >
            {Teams.map((team) => (
              <SwiperSlide key={team.id}>
                <div className="grid sm:grid-cols-[300px_auto] rounded-[20px] overflow-hidden">
                  <div className="bg-[#E6F482] sm:mr-6">
                    <img src={team.Image} alt={team.name} className="w-full h-full object-top object-cover mx-auto" />
                  </div>
                  <div className="py-8 sm:mt-0 px-0 sm:px-5">
                    <h4 className="font-medium text-primary text-3xl">{team.name}</h4>
                    <p className="text-[#53C22B] text-xl mb-6">{team.designation}</p>
                    <p className="text-secondary text-xl">{team.phara}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-center gap-8 mt-8 mb-4 xl:mb-0 w-1/2 xl:mt-14 mx-auto sm:mx-0 sm:ml-auto">
            <div className="team-scrollbar hidden sm:block flex-1 h-[3px] bg-gray-200 rounded-full"></div>

            <div className="flex gap-4 text-3xl mb-10 sm:mb-0">
              <button className="team-prev border-2 w-[50px] h-[50px] flex items-center justify-center rounded-lg">
                &lt;
              </button>
              <button className="team-next border-2 w-[50px] h-[50px] flex items-center justify-center rounded-lg">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
