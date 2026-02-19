import { useEffect, useRef } from "react";
import envelope from '../../assets/Img/envelope.svg'
import { gsap } from "gsap";
import { Link } from 'react-router-dom'
import whatsapptext from "../../assets/Img/talktoexpert-bg.svg"
import whatsappImg from "../../assets/Img/whatsapp.svg"

export default function Footer() {

  const textRef = useRef(null);
  const rotateRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    gsap.to(el, {
      xPercent: -50,
      repeat: -1,
      duration: 10,
      ease: 'linear'
    });

    const el1 = rotateRef.current;
    gsap.to(el1, {
      repeat: -1,
      rotate: 360,
      duration: 8,
      ease: 'linear',
      transformOrigin: "50% 50%",
    })
  }, []);

  return (
    <footer className=''>
      <div className="sm:max-w-[90%] mx-auto grid md:grid-cols-[auto_auto] lg:grid-cols-[540px_auto] gap-8 lg:gap-10 pb-0 md:pb-18 px-4">

        <div className="bg-[#082233] p-7 sm:p-10 lg:p-14">
          <img src={envelope} alt="" className='mb-5 w-[60px] sm:w-[85px]' />
          <p className='text-[#53C22B] font-medium text-3xl sm:text-5xl leading-9 sm:leading-14 mb-6 sm:mb-8'>Join Us <br className='hidden lg:block' /><span className='text-white'>in Powering a <br className='hidden lg:block' />Sustainable Future</span></p>
          <p className='text-[#909090] text-base sm:text-lg mb-6 sm:mb-8'>Sign up for Green Gem Energy Updates.</p>

          <form action="">
            <input type="text" placeholder='Enter your email' className='text-base sm:text-lg text-[#909090] border border-[#909090] w-full mb-4 sm:mb-5 rounded-sm px-5 sm:px-8 py-3' />
            <button className='rounded-sm text-lg sm:text-xl w-full bg-[#53C22B] p-3.5 sm:p-5 text-white'>Subscribe</button>
          </form>
        </div>

        <div className="flex flex-col justify-end text-primary pt-10 md:pt-0">
          <div className="grid xl:grid-cols-2 gap-10">

            {/* Grid col 1 */}
            <div className="space-y-4">

              <Link to="/careers">
                <div className="text-3xl semibold relative mb-4">Careers<span className="absolute top-[-60%] left-[30px] text-[10px] text-white bg-[#EA6430] px-2 py-1 rounded current-openings z-[1] after:content-[''] after:w-2 after:h-3 after:bg-[#EA6430] after:absolute after:bottom-[-4px] after:left-[15px] after:rotate-45 after:z-[-1]">Current Openings</span>
                </div>
              </Link>

              <div className="space-y-1" id="footerContact">
                <div className="text-md sm:text-lg font-medium text-primary">Head office</div>
                <div className=" text-base md:text-md 3xl:text-lg text-[#4C4C4C]">230, E TV Swamy Rd, R.S. Puram, <br />Coimbatore, Tamil Nadu 641002</div>
              </div>

              <div className="space-y-1">
                <div className="text-md sm:text-lg font-medium text-primary">Project Site</div>
                <div className=" text-base md:text-md 3xl:text-lg text-[#4C4C4C]">Emerald Solar Park, Namandi, Near New <br />Kancheepuram Township, Tamilnadu - 604410</div>
              </div>
            </div>

            {/* Grid col 2 */}
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="text-[#4E4E4E] text-sm">Email</div>
                <Link className="text-lg sm:text-xl font-medium break-all" to="mailto:info@greengemrenewables.com">info@greengemrenewables.com</Link>
              </div>
              <div className="space-y-1">
                <div className="text-[#4E4E4E] text-sm">Phone</div>
                <Link className="text-lg sm:text-xl font-medium " to="tel:+919994260427">+91 99942 60427</Link></div>
            </div>

          </div>

          <hr className="mt-8 mb-2 text-[#D5D8DA]" />

          <div className="flex justify-between gap-6 flex-wrap py-8">
            <div ref={textRef} className="text-sm text-[#4B4B4B]">© 2025 Green Gem Energy LLP. All Rights Reserved.</div>
            <div className="text-xs">
              <div className="flex gap-6 text-[#4B4B4B]">
                <Link to="/terms-and-conditions" className="mr-2 text-sm">Terms Conditions</Link>
                <Link to="/privacy-policy" className='text-sm'>Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scrolling text */}
      <div className="bg-[#082233] py-8 overflow-hidden">
        <h2 ref={textRef} className='text-5xl sm:text-7xl md:text-9xl text-[#ffffff10] font-bold whitespace-nowrap'>Are you interested? Let’s discuss today?</h2>
      </div>

      <div className="fixed bottom-5 right-4 sm:bottom-10 sm:right-10 flex items-center justify-center z-10 w-[74px] sm:w-[84px]">
        <img ref={rotateRef} src={whatsapptext} alt="" className="w-full shadow-sm shadow-amber-50 rounded-full" />
        <a href="https://api.whatsapp.com/send/?phone=919994260427&text=Hi%2C+I+have+a+query&type=phone_number&app_absent=0" target="_blank" className="absolute" >
          <img src={whatsappImg} alt="" className="sm:w-7" />
        </a>
      </div>
    </footer>
  );
}
