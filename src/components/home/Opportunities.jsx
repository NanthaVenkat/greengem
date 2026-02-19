import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import opportunity1 from "../../assets/Img/opportunity1.svg";
import opportunity2 from "../../assets/Img/opportunity2.svg";
import opportunity3 from "../../assets/Img/opportunity3.svg";
import opportunity4 from "../../assets/Img/opportunity4.svg";

const opportunities = [
  {
    id: 1,
    Image: opportunity1,
    title: "Industries & <br className='hidden 2xl:block'/>Businesses",
    phara:
      "Opportunities for Industries dedicated to achieving RE100 goals and advancing sustainability to lease out Industrial Spaces over a long term.",
    link: "/reach-out",
  },
  {
    id: 2,
    Image: opportunity2,
    title: "Large <br className='hidden 2xl:block'/>Land owners",
    phara:
      "Opportunities for Land Owners in building sustainable communities and businesses in their neighborhood..",
    link: "/reach-out",
  },
  {
    id: 3,
    Image: opportunity3,
    title: "Team and <br className='hidden 2xl:block'/>Research",
    phara:
      "Be a part of our Founding Team & build the future of communities together brick by brick.",
    link: "/reach-out",
  },
  {
    id: 4,
    Image: opportunity4,
    title: "Passionate <br className='hidden 2xl:block'/>Startups",
    phara:
      "Incubate your Clean Energy startup with us getting access to not just funding, but also a launchpad to experiment your idea as a business.",
    link: "/reach-out",
  },
];

export default function Opportunities() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".opportunities-heading",
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
        ".opportunity-card",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".opportunities",
            start: "top 82%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-14 md:py-24 px-4 bg-[#082233]">
      <div className="sm:max-w-[90%] mx-auto">
        <h2 className="opportunities-heading text-[1.9rem] sm:text-4xl md:text-5xl mb-8 sm:mb-16 text-white text-center">
          Opportunities
          <span className="inline-block w-[5px] h-[5px] bg-[#53C22B] ml-1"></span>
        </h2>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            546: { slidesPerView: 2 },
            768: { slidesPerView: 3.5 },
            1280: { slidesPerView: 4 },
          }}
          className="opportunities"
        >
          {opportunities.map((opportunitie) => (
            <SwiperSlide key={opportunitie.id} className="pb-8" style={{ height: "unset" }}>
              <div className="opportunity-card flex flex-col border rounded-lg border-[#FFFFFF66] p-6 sm:p-8 h-full text-white">
                <div className="flex items-center">
                  <img
                    src={opportunitie.Image}
                    alt={opportunitie.title.replace(/<[^>]*>/g, "")}
                    className="min-w-[44px] w-[44px] 3xl:min-w-[54px] 3xl:w-[54px] min-h-[44px] h-[44px] 3xl:min-h-[54px] 3xl:h-[54px] object-fit object-center mr-3 sm:mr-4"
                  />
                  <h3
                    dangerouslySetInnerHTML={{ __html: opportunitie.title }}
                    className="font-medium text-2xl sm:text-2xl mb-3"
                  />
                </div>
                <p className="text-base md:text-md 3xl:text-lg mb-6 sm:mb-8">{opportunitie.phara}</p>
                <a href={`${opportunitie.link}`} className="inline-block mt-auto w-max text-base sm:text-md border rounded-sm px-6 sm:px-8 py-2 transition hover:bg-[#53C22B]">
                  Reach Out
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
