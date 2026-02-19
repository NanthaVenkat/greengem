import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import challengeImge1 from "../../assets/Img/challengeIcon1.svg";
import challengeImge2 from "../../assets/Img/challengeIcon2.svg";
import challengeImge3 from "../../assets/Img/challengeIcon3.svg";
import challengeImge4 from "../../assets/Img/challengeIcon4.svg";
import challengeImge5 from "../../assets/Img/challengeIcon5.svg";

const challenges = [
  {
    id: 1,
    image: challengeImge1,
    title: "22 billion <br/>metric tons CO₂",
    phara: "Projected emissions by 2050.",
  },
  {
    id: 2,
    image: challengeImge2,
    title: "75% GHG <br/>emissions",
    phara: "Still driven by fossil fuel use.",
  },
  {
    id: 3,
    image: challengeImge3,
    title: "3 billion+ people",
    phara: "Lack access to affordable renewable energy.",
  },
  {
    id: 4,
    image: challengeImge4,
    title: "$4 trillion/year <br/>investment gap",
    phara: "Needed for net-zero transition.",
  },
  {
    id: 5,
    image: challengeImge5,
    title: "81.5% energy <br/>still fossil-based",
    phara: "As of 2023.",
  },
];

export default function Challenges() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".challenges-intro",
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
        ".challenge-card",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".challenges-grid",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-14 md:py-24 px-4">
      <div className="sm:max-w-[90%] mx-auto">
        <div className="challenges-intro w-full lg:w-1/2 inline-block mb-6 lg:mb-0">
          <p className="text-[#53C22B] text-sm sm:text-base font-helvetica font-medium uppercase mb-3 sm:mb-4">
            About Green Gem Renewables
          </p>
          <h3 className="text-primary text-[1.9rem] sm:text-4xl leading-tight">
            Harness <span><i className="font-libre-baskerville">the Power of Nature</i></span>{" "}
            <br className="hidden sm:block" />
            with Renewable Energy.
          </h3>
        </div>

        <div className="challenges-intro w-full lg:w-1/2 inline-block">
          <p className="text-secondary text-base md:text-md 3xl:text-lg">
            We&apos;re a new Renewable Energy Independent Power Producer
            committed to developing large Net Zero communities by 2030. Our
            mission is to create sustainable spaces that empower businesses and
            people. Together, we&apos;re shaping a future of endless
            opportunities.
          </p>
        </div>

        <div className="font-helvetica w-full inline-block mt-10 sm:mt-16">
          <h2 className="text-[1.9rem] sm:text-4xl md:text-5xl mb-6 sm:mb-10">
            Challenges
            <span className="inline-block w-[5px] h-[5px] bg-[#53C22B] ml-1"></span>
          </h2>

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1.5 },
              546: { slidesPerView: 2 },
              768: { slidesPerView: 3.5 },
              1280: { slidesPerView: 4 },
              1500: { slidesPerView: 5 },
            }}
            className="challenges-grid"
          >
            {challenges.map((challenge) => (
              <SwiperSlide key={challenge.id} className="pb-8" style={{ height: "unset" }}>
                <div className="challenge-card border border-[#D5D8DA] rounded-sm py-6 sm:py-8 px-5 sm:px-6 h-full">
                  <img
                    src={challenge.image}
                    alt={challenge.title.replace(/<[^>]*>/g, "")}
                    className="w-[68px] h-[68px] sm:w-[80px] sm:h-[80px] mb-3"
                  />

                  <h2
                    dangerouslySetInnerHTML={{ __html: challenge.title }}
                    className="font-medium text-primary text-xl sm:text-2xl md:text-2xl mb-2 sm:mb-3"
                  />

                  <p className="text-secondary text-base md:text-md 3xl:text-lg">
                    {challenge.phara}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
