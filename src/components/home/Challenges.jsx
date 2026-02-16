import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import challengeImge1 from "../../assets/Img/challengeIcon1.svg"
import challengeImge2 from "../../assets/Img/challengeIcon2.svg"
import challengeImge3 from "../../assets/Img/challengeIcon3.svg"
import challengeImge4 from "../../assets/Img/challengeIcon4.svg"
import challengeImge5 from "../../assets/Img/challengeIcon5.svg"

const challenges = [
    {
        id: 1,
        image: challengeImge1,
        title: "22 billion <br/>metric tons CO₂",
        phara: "Projected emissions by 2050."
    },
    {
        id: 2,
        image: challengeImge2,
        title: "75% GHG <br/>emissions",
        phara: "Still driven by fossil fuel use."
    },
    {
        id: 3,
        image: challengeImge3,
        title: "3 billion+ people",
        phara: "Lack access to affordable renewable energy."
    },
    {
        id: 4,
        image: challengeImge4,
        title: "$4 trillion/year <br/>investment gap",
        phara: "Needed for net-zero transition."
    },
    {
        id: 5,
        image: challengeImge5,
        title: "81.5% energy <br/>still fossil-based",
        phara: "As of 2023."
    }
]

export default function Challenges() {
    return (
        <section className="py-24 px-3.5">
            <div className="2xl:max-w-[1440px] 3xl:max-w-[1540px] 4xl:max-w-[1720px] mx-auto">
                <div className="w-1/2 inline-block">
                    <p className="text-[#53C22B] text-xl font-medium uppercase mb-4">About Green Gem Renewables</p>
                    <h3 className="text-primary text-4xl">Harness <span><i>the Power of Nature</i></span> <br />with Renewable Energy.</h3>
                </div>

                <div className="w-1/2 inline-block">
                    <p className="text-secondary text-xl">We’re a new Renewable Energy Independent Power Producer committed to developing large Net Zero communities by 2030. Our mission is to create sustainable spaces that empower businesses and people. Together, we’re shaping a future of endless opportunities.</p>
                </div>

                <div className="w-full inline-block mt-16">
                    <h2 className="text-5xl mb-10">Challenges<span className="inline-block w-[5px] h-[5px] bg-[#53C22B] ml-1"></span></h2>

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
                    >
                        {challenges.map((challenge) => (
                            <SwiperSlide key={challenge.id} className="pb-8" style={{height: 'unset'}}>
                                <div className="border border-[#D5D8DA] rounded-sm py-8 px-6 h-full">
                                    <img
                                        src={challenge.image}
                                        alt={challenge.title.replace(/<[^>]*>/g, "")}
                                        className="w-[80px] h-[80px] mb-3"
                                    />

                                    <h2
                                        dangerouslySetInnerHTML={{ __html: challenge.title }}
                                        className="font-medium text-primary text-3xl mb-3"
                                    />

                                    <p className="text-secondary text-xl">
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