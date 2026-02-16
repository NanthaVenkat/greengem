import envelope from '../../assets/Img/envelope.svg'
export default function Footer() {
  return (
    <footer className='py-24'>
      <div className="2xl:max-w-[1440px] 3xl:max-w-[1540px] 4xl:max-w-[1720px] mx-auto grid md:grid-cols-[auto_auto] lg:grid-cols-[540px_auto] gap-8 lg:gap-10">
        <div className="bg-[#082233] p-14">
          <img src={envelope} alt="" className='mb-5 w-[85px]' />
          <p className='text-[#53C22B] font-medium text-5xl leading-14 mb-8'>Join Us <br /><span className='text-white'>in Powering a <br />Sustainable Future</span></p>
          <p className='text-[#909090] text-lg mb-8'>Sign up for Green Gem Energy Updates.</p>

          <form action="">
            <input type="text" placeholder='Enter your email' className='text-lg text-[#909090] border border-[#909090] w-full mb-5 rounded-sm px-8 py-3' />
            <button className='rounded-sm text-xl w-full bg-[#53C22B] p-5 text-white'>Subscribe</button>
          </form>
        </div>

        <div className=" pb-10  pt-16 text-primary">
          <div className="  grid lg:grid-cols-2 gap-10">

            {/* Grid col 1 */}
            <div className="space-y-4">

              <a href="/careers/">
                <div className="text-3xl semibold relative">Careers<span className="absolute top-[-80%] left-[30px] text-xs text-white bg-[#EA6430] px-2 py-1 rounded-md current-openings z-[1] after:content-[''] after:w-3 after:h-3 after:bg-[#EA6430] after:absolute after:bottom-[-6px] after:left-[30px] after:rotate-45 after:z-[-1]">Current Openings</span>
                </div>
              </a>

              <div className="space-y-1" id="footerContact">
                <div className="text-xl font-medium text-primary">Head office</div>
                <div className="text-lg text-[#4C4C4C]">230, E TV Swamy Rd, R.S. Puram, <br />Coimbatore, Tamil Nadu 641002</div>
              </div>

              <div className="space-y-1">
                <div className="text-xl font-medium text-primary">Project Site</div>
                <div className="text-lg text-[#4C4C4C]">Emerald Solar Park, Namandi, Near New <br />Kancheepuram Township, Tamilnadu - 604410</div>
              </div>
            </div>

            {/* Grid col 2 */}
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="text-[#4E4E4E] text-md">Email</div>
                <a className="text-3xl font-medium" href="mailto:info@greengemrenewables.com">info@greengemrenewables.com</a>
              </div>
              <div className="space-y-1">
                <div className="text-[#4E4E4E] text-md">Phone</div>
                <a className="text-3xl font-medium " href="tel:+919994260427">+91 99942 60427</a></div>
            </div>

          </div>

          <hr className="mt-8 mb-2" />

          <div className="flex justify-between gap-6 flex-wrap">
            <div className="text-md text-[#4B4B4B]">© 2025 Green Gem Energy LLP. All Rights Reserved.</div>
            <div className="text-xs">
              <div className="flex gap-6 text-[#4B4B4B]">
                <a href="/terms-and-conditions/" className="mr-2 text-md">Terms Conditions</a>
                <a href="/privacy-policy/" className='text-md'>Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
