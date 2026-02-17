import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroBg from "../../assets/Img/home-hero-banner.webp";

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        if (!heroRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".hero-content",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" }
            );

            gsap.fromTo(
                heroRef.current,
                { scale: 1.06 },
                { scale: 1, duration: 1.6, ease: "power2.out" }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="min-h-screen over flex items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: `url(${heroBg})` }}
        >

            {/* black overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000070] z-[1]"></div>

            {/* content */}
            <div className="hero-content mx-auto z-[2] p-3.5">
                <h2 className="text-center text-white text-5xl md:text-6xl max-w-4xl mx-auto font-light leading-12 md:leading-16">Empowering the world with <span className="font-medium">clean energy innovation.</span></h2>

                <p className="max-w-xl mx-auto text-center text-white text-lg md:text-xl mt-5">Revolutionizing Renewable Energy for a Sustainable Future Solving climate change with innovative energy solutions</p>
            </div>
        </section>
    );
}
