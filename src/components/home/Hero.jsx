import heroBg from "../../assets/Img/home-hero-banner.webp";

export default function Hero() {
    return (
        <section
            className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: `url(${heroBg})` }}
        >

            {/* black overlay */}
            <div class="absolute top-0 left-0 w-full h-full bg-[#00000070] z-[1]"></div>

            {/* content */}
            <div className="mx-auto z-[2] p-3.5">
                <h2 className="text-center text-white text-6xl font-light leading-16">Empowering the world with <br/><span className="font-medium">clean energy innovation.</span></h2>

                <p className="max-w-xl mx-auto text-center text-white text-xl mt-5">Revolutionizing Renewable Energy for a Sustainable Future Solving climate change with innovative energy solutions</p>
            </div>
        </section>
    );
}