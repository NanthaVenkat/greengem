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
            className="min-h-[78svh] sm:min-h-screen flex items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: `url(${heroBg})` }}
        >

            {/* black overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000070] z-[1]"></div>

            {/* content */}
            <div className="hero-content mx-auto z-[2] px-4 py-6 sm:p-3.5">
                <h2 className="text-center text-white text-[2rem] sm:text-5xl max-w-2xl mx-auto font-light leading-tight sm:leading-12 md:leading-16">Empowering the world with <span className="font-medium">clean energy innovation.</span></h2>

                <p className="max-w-md mx-auto text-center text-white text-base md:text-md 3xl:text-lg mt-4 sm:mt-5">Revolutionizing Renewable Energy for a Sustainable Future Solving climate change with innovative energy solutions</p>
            </div>
        </section>
    );
}
