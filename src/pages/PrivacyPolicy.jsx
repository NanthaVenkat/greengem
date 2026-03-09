import logo from "../assets/Img/logo.svg"
import { Link } from "react-router-dom"

export default function TermsandConditions() {
    return (
        <>
            <header className="top-0 left-0 z-10 py-2 sm:py-4 px-4 w-full">
                <div className="sm:max-w-[90%] mx-auto">
                    <Link to='/'><img src={logo} alt="Greengem" className="w-[120px] sm:w-[144px] mb-1 sm:mb-2" /></Link>
                </div>
            </header>

            <section className="pb-14 md:pb-24 px-3.5">
                <div className="sm:max-w-[90%] mx-auto">
                    <h2 className="text-[1.9rem] sm:text-4xl mb-10">Privacy Policy<span className="inline-block w-[5px] h-[5px] bg-[#53C22B] ml-1"></span></h2>

                    <p className="mb-4 text-base md:text-md 3xl:text-lg">Green Gem Energy LLP is committed to protecting the privacy of our customers as well as all those who are associated with us. To better protect your privacy, we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. We will not share personally identifiable information with third parties unless we have your permission or we believe in good faith we are required to by law.</p>

                    <p className="mb-4 text-base md:text-md 3xl:text-lg">We use your personal information to deliver services or carry out transactions you have requested, such as providing information on new developments, products and so forth. We shall only use your information for direct communication with you. All communication is controlled by us and no other companies have access to our subscribers’ names and addresses. Any information our subscribers give us remains confidential. Where information collected on this site may be used in this way, you will be advised at the point where this information is collected and given the opportunity to decline such use then or later. When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>

                    <h5 className="mb-2 font-medium text-xl sm:text-2xl md:text-2xl">Media</h5>
                    <p className="mb-4 text-base md:text-md 3xl:text-lg">If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>

                    <h5 className="mb-3 font-semibold text-xl sm:text-2xl md:text-2xl">Contact forms</h5>
                    <h5 className="mb-2 font-medium text-xl sm:text-2xl md:text-2xl">Cookies</h5>
                    <p className="mb-4 text-base md:text-md 3xl:text-lg">If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year. If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
                    <p className="mb-4 text-base md:text-md 3xl:text-lg">When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed. If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>

                    <h5 className="mb-2 font-medium text-xl sm:text-2xl md:text-2xl">Embedded content from other websites</h5>
                    <p className="mb-4 text-base md:text-md 3xl:text-lg">Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>

                    <h5 className="mb-3 font-semibold text-xl sm:text-2xl md:text-2xl">Analytics</h5>
                    <h5 className="mb-2 font-medium text-xl sm:text-2xl md:text-2xl">How long we retain your data</h5>
                    <p className="mb-4 text-base md:text-md 3xl:text-lg">If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue. For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>

                    <h5 className="mb-2 font-medium text-xl sm:text-2xl md:text-2xl">What rights you have over your data</h5>
                    <p className="mb-4 text-base md:text-md 3xl:text-lg">If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes. We Don’t sell and send your data.</p>
                </div>
            </section>
        </>
    );
}